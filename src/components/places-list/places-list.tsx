import clsx from 'clsx';
import { Offer } from '../../types/offer';
import { OfferPreview } from '../../types/offer-preview';
import Card from '../card';

type TPlacesListProps = {
  offers: Offer[] | OfferPreview[];
  extraClassName?: string;
};

function PlacesList({ offers, extraClassName }: TPlacesListProps) {
  return (
    <div className={clsx(extraClassName, 'places__list')}>
      {offers.map((item) => (
        <Card key={item.id} offer={item} />
      ))}
    </div>
  );
}

export default PlacesList;
