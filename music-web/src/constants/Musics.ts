export type Album = {
    id: string;
    cover: string;
    title: string;
    artist: string;
    duration: string;
    year?: number;
    genre?: string;
    audio?: string;
    tracks?: {
        id: string;
        title: string;
        duration?: string;
        src?: string;
    }[];
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
        cover: './favicon.png',
        title: 'Subh Vivah',
        artist: 'SNEHI',
        duration: '7 MIN',
        year: 2026,
        genre: 'Ambient',
        audio: '/src/assets/music-list/Vivah.mp3',
        tracks: [
            { id: 't-vivah', title: 'Vivah', duration: '04:12', src: '/src/assets/music-list/Vivah.mp3' },
            { id: 't-vedik', title: 'Vedik', duration: '03:58', src: '/src/assets/music-list/vedik.mp3' },
            { id: 't-shiva', title: 'Shiva', duration: '05:04', src: '/src/assets/music-list/shiva.mp3' },
            { id: 't-garib', title: 'Garib', duration: '04:27', src: '/src/assets/music-list/garib.mp3' },
        ],
    },
    {
        id: 'alb-002',
        cover: './favicon.png',
        title: 'Sunrise Echoes',
        artist: 'SNEHI',
        duration: '37:05',
        year: 2024,
        genre: 'Indie Pop',
        audio: '/src/assets/music-list/Vivah.mp3',
        tracks: [
            { id: 't-vedik', title: 'Vedik', duration: '03:58', src: '/src/assets/music-list/vedik.mp3' },
            { id: 't-shiva', title: 'Shiva', duration: '05:04', src: '/src/assets/music-list/shiva.mp3' },
        ],
    },
    {
        id: 'alb-003',
        cover: './favicon.png',
        title: 'City Pulse',
        artist: 'SNEHI',
        duration: '49:12',
        year: 2023,
        genre: 'Electronica',
        audio: '/src/assets/music-list/Vivah.mp3',
        tracks: [
            { id: 't-vivah', title: 'Vivah', duration: '04:12', src: '/src/assets/music-list/Vivah.mp3' },
            { id: 't-shiva', title: 'Shiva', duration: '05:04', src: '/src/assets/music-list/shiva.mp3' },
            { id: 't-garib', title: 'Garib', duration: '04:27', src: '/src/assets/music-list/garib.mp3' },
        ],
    },
    {
        id: 'alb-004',
        cover: './favicon.png',
        title: 'Ocean Lullaby',
        artist: 'SNEHI',
        duration: '33:44',
        year: 2022,
        genre: 'Chill',
        audio: '/src/assets/music-list/Vivah.mp3',
        tracks: [
            { id: 't-vivah', title: 'Vivah', duration: '04:12', src: '/src/assets/music-list/Vivah.mp3' },
            { id: 't-shiva', title: 'Shiva', duration: '05:04', src: '/src/assets/music-list/shiva.mp3' },
            { id: 't-garib', title: 'Garib', duration: '04:27', src: '/src/assets/music-list/garib.mp3' },
        ],
    },
    {
        id: 'alb-005',
        cover: './favicon.png',
        title: 'Desert Lines',
        artist: 'SNEHI',
        duration: '45:01',
        year: 2021,
        genre: 'World',
        audio: '/src/assets/music-list/Vivah.mp3',
        tracks: [
            { id: 't-vivah', title: 'Vivah', duration: '04:12', src: '/src/assets/music-list/Vivah.mp3' },
            { id: 't-shiva', title: 'Shiva', duration: '05:04', src: '/src/assets/music-list/shiva.mp3' },
            { id: 't-garib', title: 'Garib', duration: '04:27', src: '/src/assets/music-list/garib.mp3' },
        ],
    },
    {
        id: 'alb-006',
        cover: './favicon.png',
        title: 'Neon Nights',
        artist: 'SNEHI',
        duration: '29:58',
        year: 2026,
        genre: 'Dance',
        audio: '/src/assets/music-list/Vivah.mp3',
        tracks: [
            { id: 't-vivah', title: 'Vivah', duration: '04:12', src: '/src/assets/music-list/Vivah.mp3' },
            { id: 't-shiva', title: 'Shiva', duration: '05:04', src: '/src/assets/music-list/shiva.mp3' },
            { id: 't-garib', title: 'Garib', duration: '04:27', src: '/src/assets/music-list/garib.mp3' },
        ],
    },
];

export const artists = [
    {
        id: 'art-001',
        image: './hero.png',
        name: 'SNEHI',
        role: 'Singer & Producer',
        genres: ['Indie Pop', 'Acoustic'],
    },
    {
        id: 'art-002',
        image: './hero.png',
        name: 'Raag Makers',
        role: 'Composer',
        genres: ['Film Score', 'Orchestral'],
    },
];

export default { albums, artists };
