import { Link } from 'react-router-dom';
import Logo from '../logo';
import { AppRoutes } from '../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userActions, userSelectors } from '../../store/slices/user';
import { useFavoriteCount } from '../../hooks/use-favorite-count';

type THeaderProps = {
  activeLogoClassName?: string;
  shouldRenderUser?: boolean;
};

function Header({ activeLogoClassName, shouldRenderUser }: THeaderProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelectors.user);
  const favoritesCount = useFavoriteCount();

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo activeLogoClassName={activeLogoClassName} />
          </div>
          {shouldRenderUser && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {user && (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoutes.Favorites}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <>
                          <span className="header__user-name user__name">
                            {user.email}
                          </span>
                          <span className="header__favorite-count">
                            {favoritesCount}
                          </span>
                        </>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={logout}
                        to="#"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                )}
                {!user && (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoutes.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
