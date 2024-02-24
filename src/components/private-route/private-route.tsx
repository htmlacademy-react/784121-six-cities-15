import { Navigate } from 'react-router-dom';

import { PropsWithChildren } from 'react';
import { AppRoutes } from '../const';

type TPrivateRouteProps = {
  hasAccess?: boolean;
} & PropsWithChildren;

function PrivateRoute({ hasAccess, children }: TPrivateRouteProps) {
  return hasAccess ? children : <Navigate to={AppRoutes.Login} />;
}

export default PrivateRoute;
