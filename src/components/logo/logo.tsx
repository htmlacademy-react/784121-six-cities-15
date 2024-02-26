import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { AppRoutes } from '../const';

type TLogoProps = {
  activeLogoClassName?: string;
};

function Logo({ activeLogoClassName }: TLogoProps) {
  return !activeLogoClassName ? (
    <Link
      className={clsx(
        'header__logo-link',
        activeLogoClassName && 'header__logo-link--active'
      )}
      to={AppRoutes.Main}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </Link>
  ) : (
    <a
      className={clsx(
        'header__logo-link',
        activeLogoClassName && 'header__logo-link--active'
      )}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </a>
  );
}

export default Logo;
