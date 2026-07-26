import ShivTandavImage from '../../assets/albums/mahadev.png';
import HanumanChalisaImage from '../../assets/images/releases/hanuman-chalisa.webp';
import MahakaalImage from '../../assets/images/releases/mahakaal.webp';

import shiva from '/src/assets/music-list/shiva.mp3?url';
import hanumanChalisha from '/src/assets/music-list/hanuman/Shree Hanuman Chalisha.mp3?url';
import jayJannai from '/src/assets/music-list/hanuman/Jay Jannai Balwanta.mp3?url';

export const FEATUREDRELEASES = [
  {
    id: 1,
    title: 'Shiv Tandav',
    artist: 'Snehi Music',
    image: ShivTandavImage,
    audio: shiva,
  },
  {
    id: 2,
    title: 'Hanuman Chalisa',
    artist: 'Snehi Music',
    image: HanumanChalisaImage,
    audio: hanumanChalisha,
  },
  {
    id: 3,
    title: 'Jay Jannai Balwanta',
    artist: 'Snehi Music',
    image: MahakaalImage,
    audio: jayJannai,
  },
];