import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Header.module.css';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeLinkHeader');
  };
  return (
    <header className={clsx(s.header)}>
      <h2 className={clsx(s.header_title)}>RentCar</h2>

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
