import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFoundPage from './pages/not-found-page';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './pages/main-page';
import { AppRoutes } from './components/const';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import LoginPage from './pages/login-page';
import PrivateRoute from './components/private-route';

const OFFERS_IDS = ['1', '2'];

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main}>
            <Route
              index
              element={<MainPage cards={Array.from({ length: 5 }, () => '')} />}
            />
            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.Offer}
              element={<OfferPage offers={OFFERS_IDS} />}
            />
            <Route path={AppRoutes.Login} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
