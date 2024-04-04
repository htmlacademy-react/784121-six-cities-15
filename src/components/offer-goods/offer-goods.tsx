import { memo } from 'react';
import { Offer } from '../../types/offer';

type TOfferGoodsProps = {
  offer: Offer;
};

function OfferGoods({ offer }: TOfferGoodsProps) {
  return (
    <ul className="offer__inside-list">
      {offer.goods.map((good) => (
        <li key={good} className="offer__inside-item">
          {good}
        </li>
      ))}
    </ul>
  );
}

export default memo(OfferGoods);
