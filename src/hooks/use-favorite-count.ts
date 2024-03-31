import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  favoritesActions,
  favoritesSelectors,
} from '../store/slices/favorites';
import { RequestStatus } from '../components/const';
import { getToken } from '../services/token';

export const useFavoriteCount = () => {
  const dispatch = useAppDispatch();
  const favoritesStatus = useAppSelector(favoritesSelectors.favoritesStatus);
  const count = useAppSelector(favoritesSelectors.favorites).length;
  const token = getToken();

  useEffect(() => {
    if (favoritesStatus === RequestStatus.Idle && token) {
      dispatch(favoritesActions.fetchFavorites());
    }
  }, [dispatch, favoritesStatus, token]);

  return count;
};
