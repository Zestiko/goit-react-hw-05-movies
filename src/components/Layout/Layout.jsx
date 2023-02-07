import { Link } from 'react-router-dom';
import css from './Layout.module.css';

// TODO styleComponents (1:25)
const Layout = ({children}) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="" className={css.notactive}>
                Home
              </Link>
            </li>
            <li>
              <Link to="movie" className={css.active}>
                Movie
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </>
  );
};

export default Layout;