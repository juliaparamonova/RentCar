import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { customStyle } from '../../helpers/modalOps';
import { selectCar, selectIsOpenModal } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { IoMdClose } from 'react-icons/io';

import s from './ImageModal.module.css';
import clsx from 'clsx';
ReactModal.setAppElement('#root');

const ImageModal = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const selectIsCar = useSelector(selectCar);
  const dispatch = useDispatch();

  if (!selectIsCar) return null;

  const [, city, country] = selectIsCar.address.split(', ');

  const formatRentalConditions = conditions => {
    const conditionsArray = conditions.split('\n');
    return conditionsArray.map((condition, index) => {
      if (condition.includes('Minimum age')) {
        const [text, age] = condition.split(':');
        return (
          <p key={index} className={clsx(s.modal_tex)}>
            {text}: <span className={clsx(s.modal_texc)}>{age}</span>
          </p>
        );
      }
      return (
        <p key={index} className={clsx(s.modal_tex)}>
          {condition}
        </p>
      );
    });
  };

  const handleCLoseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={handleCLoseModal}
      style={customStyle}
    >
      <img
        className={clsx(s.img_modal)}
        src={selectIsCar.img}
        alt={`${selectIsCar.make} ${selectIsCar.model}`}
        width="461px"
        height="248px"
      />

      <h3 className={clsx(s.modal_title)}>
        {selectIsCar.make}{' '}
        <span className={clsx(s.model_modal)}>{selectIsCar.model}</span>,{' '}
        {selectIsCar.year}
      </h3>

      <p className={clsx(s.info_modal)}>
        {city} | {country} | Id: {selectIsCar.id} | Year: {selectIsCar.year} |
        Type: {selectIsCar.type} <br /> Fuel Consumption:{' '}
        {selectIsCar.fuelConsumption} | Engine size: {selectIsCar.engineSize}
      </p>

      <p className={clsx(s.about_car)}>{selectIsCar.description}</p>

      <p className={clsx(s.dop_modal)}>Accessories and functionalities:</p>

      <p className={clsx(s.what_dop_modal)}>
        {[...selectIsCar.accessories.join(' | ')]}
        <br />
        {[...selectIsCar.functionalities.join(' | ')]}
      </p>

      <p className={clsx(s.dop_modal)}>Rental Conditions:</p>
      <ul className={clsx(s.modal_row)}>
        {formatRentalConditions(selectIsCar.rentalConditions)}

        <li className={clsx(s.modal_block)}>
          <p className={clsx(s.modal_tex)}>
            Mileage:{' '}
            <span className={clsx(s.modal_texc)}>
              {selectIsCar.mileage.toLocaleString()}
            </span>
          </p>
        </li>
        <li className={clsx(s.modal_block)}>
          <p className={clsx(s.modal_tex)}>
            Price:{' '}
            <span className={clsx(s.modal_texc)}>
              {selectIsCar.rentalPrice}
            </span>
          </p>
        </li>
      </ul>
      <button className={clsx(s.modalBtn)}>
        <a className={clsx(s.textBtn)} href="tel:+380730000000">
          Rental car
        </a>
      </button>

      <button
        className={clsx(s.close)}
        onClick={handleCLoseModal}
        type="button"
      >
        <IoMdClose />
      </button>
    </ReactModal>
  );
};

export default ImageModal;
