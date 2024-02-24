import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { AppRoutes } from '../const';
import { OfferPreview } from '../../types/offer-preview';
import PremiumBadge from '../premium-badge';
import { getLayoutState } from './helpers';
import getRating from '../utils';

type TCardProps = {
  offer: OfferPreview;
};

function Card({ offer }: TCardProps) {
  const { isPremium, price, title, type, rating, previewImage } = offer;
  const { pathname } = useLocation();
  const {
    cardClassName,
    imageWrapperClassName,
    cardInfoClassName,
    imageWidth,
    imageHeight,
  } = getLayoutState(pathname as AppRoutes);
  const displayedRating = getRating({ rating });

  return (
    <article className={clsx(cardClassName ? cardClassName : '', 'place-card')}>
      <PremiumBadge isPremium={isPremium} extraClassName="place-card__mark" />
      <div
        className={clsx(
          imageWrapperClassName ? imageWrapperClassName : '',
          'place-card__image-wrapper'
        )}
      >
        <Link to={`${AppRoutes.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth ? imageWidth : 260}
            height={imageHeight ? imageHeight : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={clsx(
          cardInfoClassName ? cardInfoClassName : '',
          'place-card__info'
        )}
      >
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
