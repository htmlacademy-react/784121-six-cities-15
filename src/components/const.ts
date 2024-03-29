export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  OfferId = '/offer/:id',
}

export enum APIRoutes {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed,
}

export const CITIES = [
  {
    id: 'paris',
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
    name: 'Paris',
  },
  {
    id: 'cologne',
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
    name: 'Cologne',
  },
  {
    id: 'brussels',
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
    name: 'Brussels',
  },
  {
    id: 'amsterdam',
    location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
    name: 'Amsterdam',
  },
  {
    id: 'hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
    name: 'Hamburg',
  },
  {
    id: 'dusseldorf',
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
    name: 'Dusseldorf',
  },
] as const;

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const RATING = [
  { stars: 5, title: 'perfect' },
  { stars: 4, title: 'good' },
  { stars: 3, title: 'not bad' },
  { stars: 2, title: 'badly' },
  { stars: 1, title: 'terribly' },
];

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] satisfies Record<SortOption, string>;

export enum SortOption {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3,
}
