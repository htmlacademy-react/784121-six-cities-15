import { Link } from 'react-router-dom';
import { AppRoutes } from '../components/const';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <main className="page__main">
      <Helmet>
        <title>Страница не найдена!</title>
      </Helmet>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>404 Not Found</h1>
        <Link style={{ textDecoration: 'underline' }} to={AppRoutes.Main}>
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
