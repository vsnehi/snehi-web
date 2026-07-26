export type Album = {
  id: string;
  cover: string;
  title: string;
  artist: string;
  duration: string;
  year?: number;
  genre?: string;
};

export type Artist = {
  id: string;
  image: string;
  name: string;
  role?: string;
  genres?: string[];
};

export const albums: Album[] = [
  {
    id: 'alb-001',
    cover: './assets/profile.jpeg',
    title: 'Midnight Rhythms',
    artist: 'Snehi Orchestra',
    duration: '42:18',
    year: 2025,
    genre: 'Ambient',
  },
  {
    id: 'alb-002',
    cover: '/src/assets/placeholder-album.jpg',
    title: 'Sunrise Echoes',
    artist: 'Asha Roy',
    duration: '37:05',
    year: 2024,
    genre: 'Indie Pop',
  },
  {
    id: 'alb-003',
    cover: '/src/assets/placeholder-album.jpg',
    title: 'City Pulse',
    artist: 'The Nomads',
    duration: '49:12',
    year: 2023,
    genre: 'Electronica',
  },
  {
    id: 'alb-004',
    cover: '/src/assets/placeholder-album.jpg',
    title: 'Ocean Lullaby',
    artist: 'Snehi Orchestra',
    duration: '33:44',
    year: 2022,
    genre: 'Chill',
  },
  {
    id: 'alb-005',
    cover: '/src/assets/placeholder-album.jpg',
    title: 'Desert Lines',
    artist: 'Aman Singh',
    duration: '45:01',
    year: 2021,
    genre: 'World',
  },
  {
    id: 'alb-006',
    cover: '/src/assets/placeholder-album.jpg',
    title: 'Neon Nights',
    artist: 'DJ Rhea',
    duration: '29:58',
    year: 2026,
    genre: 'Dance',
  },
];

export const artists = [
  {
    id: 'art-001',
    image: '/src/assets/placeholder-artist.jpg',
    name: 'Asha Roy',
    role: 'Singer & Producer',
    genres: ['Indie Pop', 'Acoustic'],
  },
  {
    id: 'art-002',
    image: '/src/assets/placeholder-artist.jpg',
    name: 'Ravi Mehra',
    role: 'Composer',
    genres: ['Film Score', 'Orchestral'],
  },
  {
    id: 'art-003',
    image: '/src/assets/placeholder-artist.jpg',
    name: 'DJ Rhea',
    role: 'DJ & Producer',
    genres: ['Dance', 'Electronica'],
  },
  {
    id: 'art-004',
    image: '/src/assets/placeholder-artist.jpg',
    name: 'Snehi Orchestra',
    role: 'Ensemble',
    genres: ['Ambient', 'Chill'],
  },
];

export default { albums, artists };
