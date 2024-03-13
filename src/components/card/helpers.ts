import { Size } from '../../types/size';
import { AppRoutes } from '../const';

export const getLayoutState = (pathname: AppRoutes) => {
  let cardClassName = '';
  let imageWrapperClassName = '';
  let cardInfoClassName = '';

  switch (pathname) {
    case AppRoutes.Favorites:
      cardClassName = 'favorites__card';
      imageWrapperClassName = 'favorites__image-wrapper';
      cardInfoClassName = 'favorites__card-info';
      break;
    case AppRoutes.Main:
      cardClassName = 'cities__card';
      imageWrapperClassName = 'cities__image-wrapper';
      break;
    case AppRoutes.Offer:
      cardClassName = 'near-places__card';
      imageWrapperClassName = 'near-places__image-wrapper';
      break;
  }

  return {
    cardClassName,
    imageWrapperClassName,
    cardInfoClassName,
  };
};

export const getImageSize = (size: Size) =>
  size === 'small' ? { width: 150, height: 110 } : { width: 260, height: 200 };
