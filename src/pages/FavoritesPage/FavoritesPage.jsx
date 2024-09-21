import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectFilterFavorite } from '../../redux/cars/selectors';
import CarItem from '../../components/CarItem/CarItem';
import { fetchCarsThunk } from '../../redux/cars/operations';
import ImageModal from '../../components/ImageModal/ImageModal';

import s from './FavoritesPage.module.css';
import clsx from 'clsx';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFilterFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>
        My favorite <span className={clsx(s.span_logo)}>cars</span>
      </h1>
      <ul className={clsx(s.card_list)}>
        {favoriteCars.map(car => {
          return (
            <li key={car.id} className={clsx(s.card_block)}>
              <CarItem {...car} />
            </li>
          );
        })}
      </ul>
      <ImageModal />
    </div>
  );
};

export default FavoritesPage;
