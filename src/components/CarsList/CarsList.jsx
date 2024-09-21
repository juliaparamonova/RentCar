import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectFilterCars } from '../../redux/cars/selectors';
import CarItem from '../CarItem/CarItem';
import { fetchCarsThunk } from '../../redux/cars/operations';
import clsx from 'clsx';
import s from './CarList.module.css';

const CarList = () => {
  const cars = useSelector(selectFilterCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <ul className={clsx(s.car_list)}>
      {cars.map(car => {
        return (
          <li key={car.id} className={clsx(s.car_blank)}>
            <CarItem {...car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
