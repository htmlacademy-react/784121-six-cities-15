import { Offer } from '../../types/offer';
import FavoritesItem from '../favorites-item';

type TFavoritesListProps = {
  favoritesOffers: {
    [key: string]: Offer[];
  };
};

function FavoritesList({ favoritesOffers }: TFavoritesListProps) {
  return (
    <ul className="favorites__list">
      {Object.entries(favoritesOffers).map(([city, offersByLocation]) => (
        <FavoritesItem key={city} city={city} offers={offersByLocation} />
      ))}
    </ul>
  );
}

export default FavoritesList;
