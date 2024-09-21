import toast from 'react-hot-toast';
// import { ThreeCircles } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import CarsList from '../../components/CarsList/CarsList';
import FilterCar from '../../components/FilterCar/FilterCar';
import { fetchMoreCarsThunk } from '../../redux/cars/operations';
import { selectFilterCars, selectIsLoading } from '../../redux/cars/selectors';
import ImageModal from '../../components/ImageModal/ImageModal';

import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const perPage = 12;
  const cars = useSelector(selectFilterCars);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchMoreCarsThunk(nextPage));
  };

  const isLastPage = cars.length % perPage !== 0 || cars.length === 0;

  useEffect(() => {
    if (isLastPage && page > 1) {
      toast.error(
        'That’s all the cars available in our catalog at the moment.'
      );
    }
  }, [isLastPage, page]);

  return (
    <div className={clsx(s.catalog)}>
      <FilterCar />
      <div className={clsx(s.catalog_item)}>
        <CarsList />
        <ImageModal />
        {isLoading && (
          <div>
            {/* <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            /> */}
          </div>
        )}
        {!isLastPage && !isLoading && (
          <button onClick={handleLoadMore} className={clsx(s.load_more)}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
