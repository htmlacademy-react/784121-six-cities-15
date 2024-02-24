import { Offer } from '../../types/offer';
import FavoritesItem from '../favorites-item';
import { getCities } from './helpers';

type TFavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({ offers }: TFavoritesListProps) {
  const cities = getCities({ offers });

  return (
    <ul className="favorites__list">
      {cities?.map((city) => (
        <FavoritesItem key={city} city={city} offers={offers} />
      ))}
    </ul>
  );
}

export default FavoritesList;
