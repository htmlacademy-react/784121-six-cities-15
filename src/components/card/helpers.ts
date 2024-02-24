import { AppRoutes } from '../const';

export const getLayoutState = (pathname: AppRoutes) => {
  let cardClassName = '';
  let imageWrapperClassName = '';
  let cardInfoClassName = '';
  let imageWidth = 0;
  let imageHeight = 0;

  switch (pathname) {
    case AppRoutes.Favorites:
      cardClassName = 'favorites__card';
      imageWrapperClassName = 'favorites__image-wrapper';
      cardInfoClassName = 'favorites__card-info';
      imageWidth = 150;
      imageHeight = 110;
      break;
    case AppRoutes.Main:
      cardClassName = 'cities__card';
      imageWrapperClassName = 'cities__image-wrapper';
      break;
  }

  return {
    cardClassName,
    imageWrapperClassName,
    cardInfoClassName,
    imageWidth,
    imageHeight,
  };
};
