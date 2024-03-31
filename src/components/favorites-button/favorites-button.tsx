import clsx from 'clsx';
import { useAppDispatch } from '../../hooks';
import { favoritesActions } from '../../store/slices/favorites';
import { getToken } from '../../services/token';
import { toast } from 'react-toastify';
import { offersActions } from '../../store/slices/offers';

type FavoriteButtonProps = {
  bemBlock: 'offer' | 'place-card';
  isFavorite: boolean;
  offerId: string;
  width?: number;
};

enum Default {
  HeightCoefficient = 18 / 17,
}

function FavoriteButton({
  bemBlock = 'place-card',
  isFavorite = false,
  offerId,
  width = 18,
}: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const token = getToken();
  const bookmarksLabel = `${isFavorite ? 'In' : 'To'} bookmarks}`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoritesClass = clsx(
    buttonClass,
    { [`${buttonClass}--active`]: isFavorite },
    'button'
  );
  const height = width * Default.HeightCoefficient;
  const onFavoriteChange = () => {
    if (!token) {
      toast('Гости не могут добавить в избранное!');
      return;
    }
    dispatch(offersActions.updateOffers(offerId));
    dispatch(
      favoritesActions.changeFavorites({ offerId, status: Number(!isFavorite) })
    );
  };

  return (
    <button className={favoritesClass} type="button" onClick={onFavoriteChange}>
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{bookmarksLabel}</span>
    </button>
  );
}

export default FavoriteButton;
