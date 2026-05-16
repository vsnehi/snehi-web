import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { createClient } from 'redis';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const redisClient = createClient({
  url: process.env['REDIS_URL'] ?? 'redis://127.0.0.1:6379',
  socket: {
    // disable automatic reconnection to avoid repeated ECONNREFUSED noise in logs
    reconnectStrategy: false,
  },
});
let _redisErrorLogged = false;
redisClient.on('error', (error: unknown) => {
  if (!_redisErrorLogged) {
    _redisErrorLogged = true;
    console.error('Redis Client Error', error);
    console.warn('Redis is unavailable; the server will use an in-memory fallback.');
  }
});

let redisAvailable = false;
let redisInitialized = false;
// Lightweight in-memory fallback for development when Redis is unavailable
const inMemoryUsers = new Map<string, Record<string, string>>();
const inMemorySessions = new Map<string, string>();

async function initRedis(): Promise<void> {
  if (redisInitialized) {
    return;
  }
  redisInitialized = true;

  try {
    await redisClient.connect();
    redisAvailable = true;
    console.log('Connected to Redis at', process.env['REDIS_URL'] ?? 'redis://127.0.0.1:6379');
  } catch (err) {
    redisAvailable = false;
    console.warn('Could not connect to Redis, using in-memory fallback. To fix, start Redis or set REDIS_URL.');
  }
}

// Helper wrappers to transparently use Redis when available or fall back to in-memory maps
async function keyExists(key: string): Promise<number> {
  await initRedis();
  if (redisAvailable) return await redisClient.exists(key);
  return inMemoryUsers.has(key) ? 1 : 0;
}

async function saveUserHash(key: string, data: Record<string, string>): Promise<void> {
  await initRedis();
  if (redisAvailable) {
    await redisClient.hSet(key, data);
  } else {
    inMemoryUsers.set(key, data);
  }
}

async function expireKey(key: string, seconds: number): Promise<void> {
  await initRedis();
  if (redisAvailable) {
    await redisClient.expire(key, seconds);
  } else {
    // in-memory expiry is not implemented for simplicity (development fallback)
  }
}

async function saveSession(token: string, email: string, seconds: number): Promise<void> {
  await initRedis();
  if (redisAvailable) {
    await redisClient.set(`session:${token}`, email, { EX: seconds });
  } else {
    inMemorySessions.set(`session:${token}`, email);
  }
}

function parseCookies(cookieHeader?: string): Record<string, string> {
  return (cookieHeader ?? '')
    .split(';')
    .map(cookie => cookie.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((cookies, cookie) => {
      const [name, ...rest] = cookie.split('=');
      cookies[name] = rest.join('=');
      return cookies;
    }, {});
}

async function resolveSession(token: string): Promise<string | null> {
  await initRedis();
  if (redisAvailable) {
    return (await redisClient.get(`session:${token}`)) ?? null;
  }
  return inMemorySessions.get(`session:${token}`) ?? null;
}

async function getUserNameByEmail(email: string): Promise<string | null> {
  const userKey = `user:${email}`;
  if (redisAvailable) {
    return (await redisClient.hGet(userKey, 'name')) ?? null;
  }
  return inMemoryUsers.get(userKey)?.['name'] ?? null;
}

app.get('/api/me', async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  const sessionToken = cookies['snehi_session'];

  if (!sessionToken) {
    return res.status(200).json({ authenticated: false });
  }

  const normalizedEmail = await resolveSession(sessionToken);

  if (!normalizedEmail) {
    return res.status(200).json({ authenticated: false });
  }

  const name = await getUserNameByEmail(normalizedEmail);
  return res.status(200).json({ authenticated: true, name, email: normalizedEmail });
});

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const normalizedEmail = String(email).toLowerCase().trim();
  const userKey = `user:${normalizedEmail}`;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const exists = await keyExists(userKey);
  if (exists) {
    return res.status(409).json({ error: 'An account already exists for that email.' });
  }
  await saveUserHash(userKey, {
    name: String(name).trim(),
    email: normalizedEmail,
    password: String(password),
    createdAt: new Date().toISOString(),
  });
  await expireKey(userKey, 60 * 60 * 24 * 30);

  const sessionToken = Buffer.from(`${normalizedEmail}:${Date.now()}`).toString('base64url');
  await saveSession(sessionToken, normalizedEmail, 60 * 60 * 24 * 7);

  res.cookie('snehi_session', sessionToken, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: process.env['NODE_ENV'] === 'production',
  });

  return res.status(201).json({ message: 'Account created and cached in Redis. Cookie has been set.' });
});

app.use('/api', (req, res) => {
  return res.status(404).json({ error: 'API endpoint not found.' });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
