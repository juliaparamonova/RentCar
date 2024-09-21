import { Link } from 'react-router-dom';
import s from './NotFound.module.css';
import clsx from 'clsx';

const NotFound = () => {
  return (
    <div className={clsx(s.notfound)}>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <Link to="/Catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default NotFound;
