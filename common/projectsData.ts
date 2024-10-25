// projectsData.ts
import { StaticImageData } from 'next/image';
import Picture1 from '@/public/Earth_Inc.png';
import Picture2 from '@/public/Blog.png';
import Picture3 from '@/public/estate.png';
import Picture4 from '@/public/ecommerce.png';
import Picture5 from '@/public/marketPlace.jpg';
import Picture6 from '@/public/travelnorth.jpg';
import Picture7 from '@/public/meta.jpg';
import Picture8 from '@/public/girl.jpg';
import Picture9 from '@/public/Okutahub.png';
import Picture10 from '@/public/Okutahub2.png';
import Picture11 from '@/public/Okutahub3.png';
import Picture12 from '@/public/Ruut.png';
import Picture13 from '@/public/Ruut2.png';
import Picture14 from '@/public/Ruut3.png';
import Picture15 from '@/public/Africansasaeng.png';
import Picture16 from '@/public/HubLanding.png';
import Picture17 from '@/public/Blog.png';
import Picture18 from '@/public/Africansasaeng.png';

// Define the structure for each project
export type Project = {
  src: StaticImageData[];
  title: string;
  description: string;
};

// Define design projects
export const designProjects: Project[] = [
  {
    src: [Picture1, Picture2, Picture3], // Multiple images per project
    title: 'Earth Inc.',
    description: '15th, Oct, 2023',
  },
  {
    src: [Picture9, Picture10, Picture11],
    title: 'Okuta Hub',
    description: '8th, Mar, 2024',
  },
  {
    src: [Picture12, Picture13, Picture14],
    title: 'Ruut Chat',
    description: '4th, Dec, 2023',
  },
  {
    src: [Picture15, Picture15, Picture15],
    title: 'African Sasaeng',
    description: '16th, Jan, 2024',
  },
  {
    src: [Picture16, Picture17, Picture18],
    title: "AD Hub",
    description: '19th, Jun, 2024',
  },
];

// Define development projects
export const developmentProjects: Project[] = [
  {
    src: [Picture16, Picture17, Picture18],
    title: "AD Hub",
    description: '19th, Jun, 2024',
  },
  {
    src: [Picture15, Picture15, Picture15],
    title: 'African Sasaeng',
    description: '16th, Jan, 2024',
  },
  {
    src: [Picture9, Picture10, Picture11],
    title: 'Okuta Hub',
    description: '8th, Mar, 2024',
  },
  {
    src: [Picture12, Picture13, Picture14],
    title: 'Ruut Chat',
    description: '4th, Dec, 2023',
  },
  {
    src: [Picture1, Picture2, Picture3], // Multiple images per project
    title: 'Earth Inc.',
    description: '15th, Oct, 2023',
  },
];
