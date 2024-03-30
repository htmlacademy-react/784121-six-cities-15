import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  favoritesActions,
  favoritesSelectors,
} from '../store/slices/favorites';
import { RequestStatus } from '../components/const';

export const useFavoriteCount = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(favoritesSelectors.favoritesStatus);
  const count = useAppSelector(favoritesSelectors.favorites).length;

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      dispatch(favoritesActions.fetchFavorites());
    }
  }, [dispatch, status]);

  return count;
};
