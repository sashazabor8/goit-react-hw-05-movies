import { NavLink, useLocation } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  const { pathname } = useLocation();

  const isActiveLink = path => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <nav>
      <NavLink
        to="/"
        className={`${s.link} ${isActiveLink('/') ? s.activeLink : ''}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={`${s.link} ${isActiveLink('/movies') ? s.activeLink : ''}`}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
