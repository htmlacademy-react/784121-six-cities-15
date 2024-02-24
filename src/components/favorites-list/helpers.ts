import { Offer } from '../../types/offer';

export const getCities = ({ offers }: { offers: Offer[] }) => {
  const cities = offers?.reduce((acc, item) => {
    if (acc.includes(item.city.name)) {
      return acc;
    }

    return [...acc, item.city.name];
  }, [] as string[]);

  return cities;
};
