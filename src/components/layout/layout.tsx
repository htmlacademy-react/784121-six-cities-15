import clsx from 'clsx';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoutes } from '../const';
import Header from '../header/header';
import Footer from '../footer';
import { getLayoutState } from './helpers';

function Layout() {
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
      />
      <Outlet />
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

export default Layout;
