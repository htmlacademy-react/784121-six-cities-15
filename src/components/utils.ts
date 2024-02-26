import { Offer } from '../types/offer';

export const getRating = ({ rating }: { rating: number }) => {
  const STARS_COUNT = 5;
  const TOTAL_WIDTH_PERCENTAGE = 100;

  return (TOTAL_WIDTH_PERCENTAGE / STARS_COUNT) * rating;
};

export const getFavoritesByLocation = (offers: Offer[]) =>
  offers.reduce<{ [key: string]: Offer[] }>((acc, current) => {
    if (!current.isFavorite) {
      return acc;
    }

    const location = current.city.name;

    if (!(location in acc)) {
      acc[location] = [];
    }
    if (current.isFavorite) {
      acc[location].push(current);
    }

    return acc;
  }, {});

export default { getRating, getFavoritesByLocation };
