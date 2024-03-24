import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFoundPage from './pages/not-found-page';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './pages/main-page';
import { AppRoutes } from './components/const';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import LoginPage from './pages/login-page';
import PrivateRoute from './components/private-route';
import Layout from './components/layout';
import { useAppSelector } from './hooks';
import { offersSelectors } from './store/slices/offers';
import Spinner from './components/spinner';

type TAppProps = {
  hasAccess: boolean;
};

function App({ hasAccess }: TAppProps) {
  const isOffersDataLoading = useAppSelector(
    offersSelectors.isOffersDataLoading
  );

  if (isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.Main}
            element={<Layout hasAccess={hasAccess} />}
          >
            <Route index element={<MainPage />} />
            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute hasAccess={hasAccess}>
                  <FavoritesPage offers={[]} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoutes.OfferId} element={<OfferPage />} />

            <Route
              path={AppRoutes.Login}
              element={
                <PrivateRoute hasAccess={hasAccess} onlyUnAuth>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
