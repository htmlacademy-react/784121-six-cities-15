import { Offer } from '../../types/offer';
import Card from '../card';

type TFavoritesItemProps = {
  offers: Offer[];
  city: string;
};

function FavoritesItem({ offers, city }: TFavoritesItemProps) {
  return (
    <li key={city} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers
          .filter((offer) => offer.city.name === city)
          .map((item) => (
            <Card key={item.id} offer={item} size="small" />
          ))}
      </div>
    </li>
  );
}

export default FavoritesItem;
