import clsx from 'clsx';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoutes } from '../const';
import Header from '../header/header';
import Footer from '../footer';
import { getLayoutState } from './helpers';

type TLayoutProps = {
  hasAccess?: boolean;
};

function Layout({ hasAccess }: TLayoutProps) {
  const { pathname } = useLocation();
  const {
    pageClassName,
    activeLogoClassName,
    shouldRenderUser,
    shouldRenderFooter,
  } = getLayoutState(pathname as AppRoutes);

  return (
    <div className={clsx('page', pageClassName)}>
      <Header
        activeLogoClassName={activeLogoClassName}
        shouldRenderUser={shouldRenderUser}
        hasAccess={hasAccess}
      />
      <Outlet />
      {shouldRenderFooter ? <Footer /> : null}
    </div>
  );
}

export default Layout;
