export interface World {
  id: string;
  imgUrl: string;
  title: string;
}

export interface Feature {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export const exploreWorlds: World[] = [
  {
    id: 'world-1',
    imgUrl: '/ecommerce.png',
    title: 'Roses Collection',
  },
  {
    id: 'world-2',
    imgUrl: '/Blog.png',
    title: 'AD Hub',
  },
  {
    id: 'world-3',
    imgUrl: '/Social.png',
    title: 'Social Network',
  },
  {
    id: 'world-4',
    imgUrl: '/Earth_Inc.png',
    title: 'Earth Inc',
  },
  {
    id: 'world-5',
    imgUrl: '/estate.png',
    title: 'Realty',
  },
];

export const startingFeatures: string[] = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export interface Insight {
  imgUrl: string;
  title: string;
  subtitle: string;
}

export const insights: Insight[] = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export interface Social {
  name: string;
  url: string;
}

export const socials: Social[] = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
