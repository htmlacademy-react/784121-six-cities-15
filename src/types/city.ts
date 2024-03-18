import { Location } from './location';
import { CITIES } from '../components/const';

export type City = {
  name: string;
  location: Location;
};

export type CityName = (typeof CITIES)[number]['name'];
