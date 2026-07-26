import Seo from '../../components/Seo/Seo';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ padding: 60, color: '#fff', textAlign: 'center' }}>
      <Seo title="Page Not Found — SNEHI" description="The page you are looking for doesn't exist." />
      <h1>404 — Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
