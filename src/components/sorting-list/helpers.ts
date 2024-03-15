import { Offer } from '../../types/offer';
import { SortType } from '../const';

type TOffersBySortTypeProps = {
  cb: (offers: Offer[]) => void;
  sortType: SortType;
  initialOffers: Offer[];
};

export const getOffersBySortType = ({
  cb,
  sortType,
  initialOffers,
}: TOffersBySortTypeProps) => {
  switch (sortType) {
    case SortType.HighToLow:
      cb([...initialOffers].sort((a, b) => b.price - a.price));
      return;
    case SortType.LowToHigh:
      cb([...initialOffers].sort((a, b) => a.price - b.price));
      return;
    case SortType.Top:
      cb([...initialOffers].sort((a, b) => b.rating - a.rating));
      return;
    default:
      cb(initialOffers);
  }
};
