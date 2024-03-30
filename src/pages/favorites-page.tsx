import { Helmet } from 'react-helmet-async';
import FavoritesEmpty from '../components/favorites-empty.tsx';
import FavoritesList from '../components/favorites-list/favorites-list.tsx';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../hooks/index.ts';
import {
  favoritesActions,
  favoritesSelectors,
} from '../store/slices/favorites.ts';
import { getFavoritesByLocation } from '../components/utils.ts';
import { useEffect } from 'react';

function FavoritesPage() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoritesSelectors.favorites);
  const favoritesByCity = favorites && getFavoritesByLocation(favorites);

  useEffect(() => {
    dispatch(favoritesActions.fetchFavorites());
  }, [dispatch]);

  return (
    <main
      className={clsx(
        'page__main page__main--favorites',
        favoritesByCity && 'page__main--favorites-empty'
      )}
    >
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      {favoritesByCity ? (
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritesOffers={favoritesByCity} />
          </section>
        </div>
      ) : (
        <FavoritesEmpty />
      )}
    </main>
  );
}

export default FavoritesPage;
