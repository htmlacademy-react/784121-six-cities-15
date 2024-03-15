import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { AppRoutes } from '../const';
import PremiumBadge from '../premium-badge';
import { useLayoutState } from './useLayoutState';
import { Size } from '../../types/size';
import { getImageSize, getRating } from '../utils';
import { Offer } from '../../types/offer';

type TCardProps = {
  offer: Offer;
  size?: Size;
  onMouseOver?: (offer: Offer | null) => void;
};

function Card({ offer, size = 'large', onMouseOver }: TCardProps) {
  const { isPremium, price, title, type, rating, previewImage } = offer;
  const { pathname } = useLocation();
  const { cardClassName, imageWrapperClassName, cardInfoClassName } =
    useLayoutState(pathname as AppRoutes);
  const displayedRating = getRating({ rating });

  const handleListItemHover = () => {
    if (onMouseOver) {
      onMouseOver(offer);
    }
  };

  const handleListItemBlur = () => {
    if (onMouseOver) {
      onMouseOver(null);
    }
  };

  return (
    <article
      className={clsx(cardClassName, 'place-card')}
      onMouseOver={handleListItemHover}
      onMouseLeave={handleListItemBlur}
    >
      <PremiumBadge isPremium={isPremium} extraClassName="place-card__mark" />
      <div className={clsx(imageWrapperClassName, 'place-card__image-wrapper')}>
        <Link to={`${AppRoutes.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            {...getImageSize(size)}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={clsx(cardInfoClassName, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${displayedRating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.Offer}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
