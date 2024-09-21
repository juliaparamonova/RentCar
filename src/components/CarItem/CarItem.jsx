import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/cars/carsSlice';
import { openModal } from '../../redux/modal/slice';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import s from './CarItem.module.css';
import clsx from 'clsx';
import { selectFavoriteCars } from '../../redux/cars/selectors';

const CarItem = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const [, city, country] = address.split(', ');

  const isFavorite = useSelector(selectFavoriteCars).includes(id);

  const handleLearnMore = () => {
    dispatch(
      openModal({
        id,
        img,
        make,
        model,
        year,
        rentalPrice,
        type,
        functionalities,
        address,
        fuelConsumption,
        engineSize,
        description,
        accessories,
        rentalConditions,
        mileage,
      })
    );
  };

  return (
    <>
      <div className={clsx(s.block_heart)}>
        <button
          className={clsx(s.heart)}
          type="button"
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <MdOutlineFavorite size="20px" color="#3470ff" />
          ) : (
            <MdFavoriteBorder size="20px" color="#fff" />
          )}
        </button>
      </div>
      <img
        className={clsx(s.car_img)}
        src={img}
        alt={`${make} ${model}`}
        width="274px"
        height="268px"
      />
      <div className={clsx(s.name_car)}>
        <div className={clsx(s.car_details)}>
          <p className={clsx(s.long_name)}>
            {make} <span className={clsx(s.span_model)}>{model}</span>, {year}
          </p>
        </div>
        <p>{rentalPrice}</p>
      </div>

      <p className={clsx(s.info)}>
        {city} | {country} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities?.[0]}
      </p>
      <button
        className={clsx(s.learn_more)}
        type="button"
        onClick={handleLearnMore}
      >
        Learn more
      </button>
    </>
  );
};

export default CarItem;
