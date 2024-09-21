import clsx from 'clsx';
import s from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={clsx(s.image_home)}>
      <h1 className={clsx(s.image_title)}>
        Your Journey, Our Wheels <span></span>{' '}
      </h1>
      <p className={clsx(s.image_text)}>
        Experience seamless travel with our top-notch car rental services.
        Wherever your journey takes you, our reliable vehicles are ready to
        drive you there in comfort and style
      </p>
      <div className={clsx(s.home_btn_cat)}>
        <Link to="/catalog" className={clsx(s.image_btn)}>
          Catalog
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
