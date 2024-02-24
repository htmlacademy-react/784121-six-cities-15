import { AppRoutes } from '../const';

export const getLayoutState = (pathname: AppRoutes) => {
  let pageClassName = '';
  let activeLogoClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathname === AppRoutes.Main) {
    pageClassName = 'page--gray page--main';
    activeLogoClassName = 'header__logo-link--active';
  } else if (pathname === AppRoutes.Login) {
    shouldRenderUser = false;
    pageClassName = 'page--gray page--login';
  } else if (pathname === AppRoutes.Favorites) {
    shouldRenderFooter = true;
  }

  return {
    pageClassName,
    activeLogoClassName,
    shouldRenderUser,
    shouldRenderFooter,
  };
};
