import { Link } from 'react-router-dom';
import { AppRoutes } from '../const';

function Footer() {
  return (
    <footer className="footer">
      <Link className="footer__logo-link" to={AppRoutes.Main}>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={64}
          height={33}
        />
      </Link>
    </footer>
  );
}

export default Footer;
