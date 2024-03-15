import { useMatch } from 'react-router-dom';
import { AppRoutes } from '../const';

export const useLayoutState = (pathname: AppRoutes) => {
  const offerPattern = useMatch(AppRoutes.OfferId);

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
    case offerPattern?.pathname:
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
