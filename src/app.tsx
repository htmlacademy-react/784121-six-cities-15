import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFoundPage from './pages/not-found-page';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './pages/main-page';
import { AppRoutes } from './components/const';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import LoginPage from './pages/login-page';
import PrivateRoute from './components/private-route';
import { OFFERS } from './mocks/offers';
import Layout from './components/layout';

type TAppProps = {
  hasAccess: boolean;
};

function App({ hasAccess }: TAppProps) {
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
                  <FavoritesPage offers={OFFERS} />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoutes.Offer}/:id`}
              element={<OfferPage offers={OFFERS} />}
            />

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
