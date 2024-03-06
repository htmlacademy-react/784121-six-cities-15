import { Location, Navigate, useLocation } from 'react-router-dom';

import { PropsWithChildren } from 'react';
import { AppRoutes } from '../const';

type TPrivateRouteProps = {
  hasAccess: boolean;
  onlyUnAuth?: boolean;
} & PropsWithChildren;

type FromState = {
  from: Location;
};

function PrivateRoute({ hasAccess, children, onlyUnAuth }: TPrivateRouteProps) {
  const location = useLocation() as Location<FromState>;

  if (hasAccess && onlyUnAuth) {
    const from = location.state?.from || { pathname: AppRoutes.Main };
    return <Navigate to={from} />;
  }

  if (!hasAccess && !onlyUnAuth) {
    return <Navigate to={AppRoutes.Login} state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
