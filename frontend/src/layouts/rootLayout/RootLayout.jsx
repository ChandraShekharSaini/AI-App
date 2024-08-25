import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';

const RootLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="/logo.png" alt="" />
          <span>InnovAItion</span>
        </Link>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
