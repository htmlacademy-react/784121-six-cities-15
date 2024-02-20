import { Link } from 'react-router-dom';
import { AppRoutes } from '../components/const';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Страница не найдена!</title>
      </Helmet>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>404 Not Found</h1>
        <Link style={{ textDecoration: 'underline' }} to={AppRoutes.Main}>
          Вернуться на главную
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
