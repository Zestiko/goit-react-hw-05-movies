import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

// TODO styleComponents (1:25)
const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? css.navLinkActive : css.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movie"
                className={({ isActive }) =>
                  isActive ? css.navLinkActive : css.navLink
                }
              >
                Movie
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};