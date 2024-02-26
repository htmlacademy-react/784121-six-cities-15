import { City } from './city';
import { Host } from './host';
import { Location } from './location';
import { OfferPreview } from './offer-preview';

export type Offer = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
  city: City;
  location: Location;
} & OfferPreview;
