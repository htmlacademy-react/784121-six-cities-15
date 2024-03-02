import { AppRoutes } from '../const';

export const getLayoutState = (pathname: AppRoutes) => {
  let pageClassName = '';
  let activeLogoClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  switch (pathname) {
    case AppRoutes.Main:
      pageClassName = 'page--gray page--main';
      activeLogoClassName = 'header__logo-link--active';
      break;
    case AppRoutes.Login:
      shouldRenderUser = false;
      pageClassName = 'page--gray page--login';
      break;
    case AppRoutes.Favorites:
      pageClassName = 'page--favorites-empty';
      shouldRenderFooter = true;
      break;
  }

  return {
    pageClassName,
    activeLogoClassName,
    shouldRenderUser,
    shouldRenderFooter,
  };
};
