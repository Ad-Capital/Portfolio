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
    imgUrl: '/ecommerce.png',
    title: 'Roses Collection',
    url: 'https://google.com',
  },
  {
    id: 'project-2',
    imgUrl: '/Blog.png',
    title: 'AD Hub',
    url: 'https://google.com',
  },
  {
    id: 'project-3',
    imgUrl: '/Social.png',
    title: 'Social Network',
    url: 'https://google.com',
  },
  {
    id: 'project-4',
    imgUrl: '/Earth_Inc.png',
    title: 'Earth Inc',
    url: 'https://earth-inc.vercel.app/',
  },
  {
    id: 'project-5',
    imgUrl: '/estate.png',
    title: 'Realty',
    url: 'https://google.com',
  },
];

export const designs: Designs[] = [
  {
    id: 'project-5',
    imgUrl: '/estate.png',
    title: 'Realty',
    url: 'https://google.com',
  },
]