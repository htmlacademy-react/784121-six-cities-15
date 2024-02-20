import { Navigate } from 'react-router-dom';
import { AppRoutes } from './const';
import { PropsWithChildren } from 'react';

type TPrivateRouteProps = {
  hasAccess?: boolean;
} & PropsWithChildren;

function PrivateRoute({ hasAccess, children }: TPrivateRouteProps) {
  return hasAccess ? children : <Navigate to={`/${AppRoutes.Login}`} />;
}

export default PrivateRoute;
