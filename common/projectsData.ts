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
    src: [Picture6, Picture4, Picture2],
    title: 'TravelNorth',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture7, Picture1, Picture4],
    title: 'VR Fest',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture5, Picture1, Picture4],
    title: 'NFT Marketplace',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture8, Picture4, Picture4],
    title: "Roses' Collection",
    description: '4th, Dec, 2024',
  },
];

// Define development projects
export const developmentProjects: Project[] = [
  {
    src: [Picture4, Picture5, Picture3],
    title: "Roses' Collection",
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture3, Picture2, Picture4],
    title: 'Estate AD',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture2, Picture3, Picture5],
    title: 'AD Hub',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture2, Picture3, Picture5],
    title: 'CodeLand',
    description: '4th, Dec, 2024',
  },
  {
    src: [Picture4, Picture3, Picture5],
    title: 'Shop AD',
    description: '4th, Dec, 2024',
  },
];
