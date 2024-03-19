import clsx from 'clsx';
import { Offer } from '../../types/offer';
import Card from '../card';

type TPlacesListProps = {
  extraClassName?: string;
  offers: Offer[];
  onCardHover?: (offer: Offer | null) => void;
};

function CardList({ extraClassName, offers, onCardHover }: TPlacesListProps) {
  return (
    <div className={clsx(extraClassName, 'places__list')}>
      {offers.map((item) => (
        <Card key={item.id} offer={item} onMouseOver={onCardHover} />
      ))}
    </div>
  );
}

export default CardList;
