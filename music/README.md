# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





Haan. Agar production-level React music website banana hai to ye packages install kar lo. Baad me AI inhi libraries ko use karega.

### Required

```bash
npm install react-router-dom
```

```bash
npm install framer-motion
```

```bash
npm install swiper
```

```bash
npm install react-icons
```

```bash
npm install sass
```

---

### Optional (Recommended)

SEO

```bash
npm install react-helmet-async
```

Smooth Scroll

```bash
npm install lenis
```

Animation on Scroll (Agar Framer Motion use nahi karna)

```bash
npm install aos
```

Lazy Image Loading

```bash
npm install react-lazy-load-image-component
```

---

### Development Packages

```bash
npm install -D eslint prettier
```

---

## Agar React + Vite project bana rahe ho

```bash
npm create vite@latest snehi-music
```

Choose

```
React

JavaScript
```

Project ke andar:

```bash
cd snehi-music
```

Install dependencies:

```bash
npm install
```

Phir ye sab:

```bash
npm install react-router-dom framer-motion swiper react-icons sass react-helmet-async lenis react-lazy-load-image-component
```

Run:

```bash
npm run dev
```

---

## Bas itna hi kaafi hai

❌ Tailwind mat install karna.

❌ Bootstrap mat install karna.

❌ Material UI mat install karna.

❌ Chakra UI mat install karna.

Agar target **exactly screenshot jaisa premium custom UI** hai, to **React + SCSS Modules + Framer Motion** best combination rahega.
