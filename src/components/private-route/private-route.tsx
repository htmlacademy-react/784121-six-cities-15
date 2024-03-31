import { Location, Navigate, useLocation } from 'react-router-dom';

import { PropsWithChildren } from 'react';
import { AppRoutes } from '../const';
import { useAppSelector } from '../../hooks';
import { userSelectors } from '../../store/slices/user';

type TPrivateRouteProps = {
  onlyUnAuth?: boolean;
} & PropsWithChildren;

type FromState = {
  from?: Location;
};

function PrivateRoute({ children, onlyUnAuth }: TPrivateRouteProps) {
  const location = useLocation() as Location<FromState>;
  const user = useAppSelector(userSelectors.user);

  if (user && onlyUnAuth) {
    const from = location.state?.from || { pathname: AppRoutes.Main };

    return <Navigate to={from} />;
  }

  if (!user && !onlyUnAuth) {
    return <Navigate to={AppRoutes.Login} state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
