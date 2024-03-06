import { Link } from 'react-router-dom';
import Logo from '../logo';
import { AppRoutes } from '../const';

type THeaderProps = {
  activeLogoClassName?: string;
  shouldRenderUser?: boolean;
  hasAccess: boolean;
};

function Header({
  activeLogoClassName,
  shouldRenderUser,
  hasAccess,
}: THeaderProps) {
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
                {hasAccess && (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoutes.Favorites}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>

                        <>
                          <span className="header__user-name user__name">
                            Oliver.conner@gmail.com
                          </span>
                          <span className="header__favorite-count">3</span>
                        </>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoutes.Main}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                )}
                {!hasAccess && (
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
