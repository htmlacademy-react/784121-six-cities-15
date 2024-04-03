import Logo from '../logo';
import HeaderAuthUser from '../header-auth-user';
import HeaderUnauthUser from '../header-unauth-user';
import { useAppSelector } from '../../hooks';
import { userSelectors } from '../../store/slices/user';

type THeaderProps = {
  activeLogoClassName?: string;
  shouldRenderUser?: boolean;
};

function Header({ activeLogoClassName, shouldRenderUser }: THeaderProps) {
  const user = useAppSelector(userSelectors.user);

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
                {user && <HeaderAuthUser user={user} />}
                {!user && <HeaderUnauthUser />}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
