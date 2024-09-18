// import { useEffect, useState } from 'react';
// import { fetchCars } from '../../redux/operation';

// export const CarsList = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const getCars = async () => {
//       try {
//         const { cars } = await fetchCars({});
//         setCars(cars);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getCars();
//   }, []);
//   return (
//     <div>
//       <ul>
//         {cars.map(cars => (
//           <li key={cars.id}>
//             <img src={cars.image} alt={cars.title} />
//           </li>
//         ))}
//       </ul>
//       CarsList
//     </div>
//   );
// };

import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operation';

export const CarsList = ({ cars }) => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    fetchCars().then(fetchedCars => setCarList(fetchedCars));
  }, []);

  return (
    <div>
      {carList.map(car => (
        <div key={car.id}>{car.name}</div>
      ))}
    </div>
  );
};
