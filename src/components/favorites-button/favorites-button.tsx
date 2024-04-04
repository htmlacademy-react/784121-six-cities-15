import clsx from 'clsx';
import { useAppDispatch } from '../../hooks';
import { favoritesActions } from '../../store/slices/favorites';
import { getToken } from '../../services/token';
import { toast } from 'react-toastify';
import { offersActions } from '../../store/slices/offers';
import { memo, useCallback } from 'react';
import { AppRoutes } from '../const';
import { useNavigate } from 'react-router-dom';
import { offerActions } from '../../store/slices/offer';

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
  const navigateToLogin = useNavigate();

  const token = getToken();
  const bookmarksLabel = `${isFavorite ? 'In' : 'To'} bookmarks}`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const iconClass = `${bemBlock}__bookmark-icon`;
  const favoritesClass = clsx(
    buttonClass,
    { [`${buttonClass}--active`]: isFavorite },
    'button'
  );
  const height = width * Default.HeightCoefficient;

  const onFavoriteChange = useCallback(() => {
    if (!token) {
      toast('Гости не могут добавить в избранное!');
      return navigateToLogin(AppRoutes.Login);
    }

    dispatch(offersActions.updateOffers(offerId));
    dispatch(offerActions.updateOffer(offerId));
    dispatch(
      favoritesActions.changeFavorites({ offerId, status: Number(!isFavorite) })
    );
  }, [dispatch, isFavorite, navigateToLogin, offerId, token]);

  return (
    <button className={favoritesClass} type="button" onClick={onFavoriteChange}>
      <svg className={iconClass} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{bookmarksLabel}</span>
    </button>
  );
}

export default memo(FavoriteButton);
