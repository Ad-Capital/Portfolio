export interface Project {
  id: string;
  imgUrl: string;
  title: string;
  url: string;
}
export interface Designs {
  id: string;
  imgUrl: string;
  title: string;
  url: string;
}

export const exploreProjects: Project[] = [
  {
    id: 'project-1',
    imgUrl: '/Okutahub.png',
    title: "OkutaHub",
    url: 'https://www.okutahub.com/',
  },
  {
    id: 'project-2',
    imgUrl: '/Hub1.png',
    title: 'CybroCity',
    url: 'https://cybrocity.vercel.app/',
  },
  {
    id: 'project-3',
    imgUrl: '/Ruut.png',
    title: 'Ruut Chat',
    url: 'https://ruut.chat',
  },
  {
    id: 'project-4',
    imgUrl: '/Earth_Inc.png',
    title: 'Earth Inc',
    url: 'https://earth-inc.vercel.app/',
  },
  {
    id: 'project-5',
    imgUrl: '/images/LettubbeOnline.png',
    title: 'Lettubbe',
    url: 'https://lettubbe.online',
  },
];