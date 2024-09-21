import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeLinkHeader');
  };
  return (
    <header className={clsx(s.header)}>
      <h2 className={clsx(s.header_title)}>
        <Link to="/" className={clsx(s.link)}>
          Rent<span className={clsx(s.span_logo)}>Car</span>
        </Link>
      </h2>

      <ul className={clsx(s.header_list)}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink className={buildLinkClass} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
