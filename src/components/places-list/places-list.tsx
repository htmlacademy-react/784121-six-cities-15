import clsx from 'clsx';
import { Offer } from '../../types/offer';
import { OfferPreview } from '../../types/offer-preview';
import Card from '../card';

type TPlacesListProps = {
  offers: Offer[] | OfferPreview[];
  extraClassName?: string;
  onListItemHover?: (id: string) => void;
  onListItemBlur?: () => void;
};

function PlacesList({
  offers,
  extraClassName,
  onListItemHover,
  onListItemBlur,
}: TPlacesListProps) {
  const handleListItemHover = (id: string) => {
    if (onListItemHover) {
      onListItemHover(id);
    }
  };

  return (
    <div className={clsx(extraClassName, 'places__list')}>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onMouseOver={handleListItemHover}
          onMouseLeave={onListItemBlur}
        />
      ))}
    </div>
  );
}

export default PlacesList;
