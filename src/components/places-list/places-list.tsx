import clsx from 'clsx';
import { Offer } from '../../types/offer';
import Card from '../card';

type TPlacesListProps = {
  offers: Offer[];
  extraClassName?: string;
  onCardHover?: (offer: Offer | null) => void;
};

function PlacesList({ offers, extraClassName, onCardHover }: TPlacesListProps) {
  return (
    <div className={clsx(extraClassName, 'places__list')}>
      {offers.map((item) => (
        <Card key={item.id} offer={item} onMouseOver={onCardHover} />
      ))}
    </div>
  );
}

export default PlacesList;
