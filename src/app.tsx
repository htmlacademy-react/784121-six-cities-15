import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/not-found-page';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './pages/main-page';
import { AppRoutes, RequestStatus } from './components/const';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import LoginPage from './pages/login-page';
import PrivateRoute from './components/private-route';
import Layout from './components/layout';
import { useAppDispatch, useAppSelector } from './hooks';
import { offersActions, offersSelectors } from './store/slices/offers';
import { userActions } from './store/slices/user';
import { getToken } from './services/token';
import Spinner from './components/spinner';
import { toast } from 'react-toastify';
import { favoritesActions } from './store/slices/favorites';

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(offersSelectors.offersStatus);
  const token = getToken();

  useEffect(() => {
    dispatch(offersActions.fetchAllOffers())
      .unwrap()
      .then(() => toast('Предложения успешно загружены!'))
      .catch(() => toast('Что-то пошло не так...'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(favoritesActions.fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(userActions.checkAuth());
    }
  }, [dispatch, token]);

  if (status === RequestStatus.Loading) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoutes.OfferId} element={<OfferPage />} />

            <Route
              path={AppRoutes.Login}
              element={
                <PrivateRoute onlyUnAuth>
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
