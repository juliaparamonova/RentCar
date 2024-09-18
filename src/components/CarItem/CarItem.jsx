import { useDispatch, useSelector } from 'react-redux';

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
  const carData = useSelector(state => state.cars.find(car => car.id === id));

  return (
    <>
      <img
        src={carData.img}
        alt={`${carData.make} ${carData.model}`}
        width="274px"
        height="268px"
      />
      <div>
        <p>
          {carData.make} {carData.model}, {carData.year}
        </p>
        <p>{carData.rentalPrice}</p>
      </div>

      <div>
        <p>{carData.address}</p>
        <p>{carData.rentalCompany}</p>
        <p>{carData.type}</p>
        <p>{carData.model}</p>
        <p>{carData.id}</p>
        <p>{carData.functionalities?.[0]}</p>
      </div>

      <button>Learn more</button>
    </>
  );
};

export default CarItem;
