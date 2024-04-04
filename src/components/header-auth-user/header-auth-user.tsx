import { Link } from 'react-router-dom';
import { useFavoriteCount } from '../../hooks/use-favorite-count';
import { AppRoutes } from '../const';
import { userActions } from '../../store/slices/user';
import { useAppDispatch } from '../../hooks';
import { User } from '../../types/user';
import { memo, useCallback } from 'react';

function HeaderAuthUser({ user }: { user: User }) {
  const dispatch = useAppDispatch();

  const favoritesCount = useFavoriteCount();

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoutes.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <>
            <span className="header__user-name user__name">{user.email}</span>
            <span className="header__favorite-count">{favoritesCount}</span>
          </>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" onClick={logout} to="#">
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default memo(HeaderAuthUser);
