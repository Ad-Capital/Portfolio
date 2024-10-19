// projectsData.ts
import { StaticImageData } from 'next/image';
import Picture1 from '@/public/Earth_Inc.png';
import Picture2 from '@/public/Blog.png';
import Picture3 from '@/public/estate.png';
import Picture4 from '@/public/ecommerce.png';
import Picture5 from '@/public/marketPlace.jpg';

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
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture3, Picture4, Picture2],
    title: 'AD Hub',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture5, Picture1, Picture4],
    title: 'Estate Management',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture5, Picture1, Picture4],
    title: 'NFT Marketplace',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture5, Picture1, Picture4],
    title: 'Roses Collection',
    description: '4th, Dec, 2024',
  },
];

// Define development projects
export const developmentProjects: Project[] = [
  {
    src: [Picture4, Picture5, Picture3],
    title: 'E-commerce Platform',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture1, Picture2, Picture4],
    title: 'Estate App',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture2, Picture3, Picture5],
    title: 'Marketplace Website',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture2, Picture3, Picture5],
    title: 'Marketplace Website',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture2, Picture3, Picture5],
    title: 'Marketplace Website',
    description: '4th, Dec, 2024',
  },
];
