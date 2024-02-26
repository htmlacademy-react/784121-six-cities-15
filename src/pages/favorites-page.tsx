import { Helmet } from 'react-helmet-async';
import { Offer } from '../types/offer';
import FavoritesEmpty from '../components/favorites-empty.tsx';
import FavoritesList from '../components/favorites-list/favorites-list.tsx';
import { getFavoritesByLocation } from '../components/utils.ts';

type TFavoritesPageProps = {
  offers: Offer[];
};

function FavoritesPage({ offers }: TFavoritesPageProps) {
  const favoritesOffers = getFavoritesByLocation(offers);

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      {Object.keys(favoritesOffers).length ? (
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritesOffers={favoritesOffers} />
          </section>
        </div>
      ) : (
        <FavoritesEmpty />
      )}
    </main>
  );
}

export default FavoritesPage;
