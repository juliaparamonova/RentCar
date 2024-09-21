import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { brandOptions, priceOptions } from '../../helpers/options';
import { filterCars } from '../../redux/cars/carsSlice';
import s from './FilterCar.module.css';
import clsx from 'clsx';
import { toast, Toaster } from 'react-hot-toast';
import { selectFilterCars } from '../../redux/cars/selectors';

const FilterCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilterCars);

  const [filters, setFilters] = useState({
    brand: null,
    price: null,
    mileageFrom: '',
    mileageTo: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  const handleFilter = useCallback(() => {
    const { brand, price, mileageFrom, mileageTo } = filters;
    if (!brand && !price && !mileageFrom && !mileageTo) {
      toast.error('You need to select at least one filter.');
      return;
    }
    dispatch(
      filterCars({
        brand: brand?.value,
        price: price?.value,
        mileageFrom,
        mileageTo,
      })
    );
  }, [filters, dispatch]);

  const handleChange = useCallback((field, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [field]: value }));
  }, []);

  const handleReset = useCallback(() => {
    setFilters({ brand: null, price: null, mileageFrom: '', mileageTo: '' });
    dispatch(
      filterCars({ brand: null, price: null, mileageFrom: '', mileageTo: '' })
    );
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (!isLoading && cars.length === 0) {
      toast.error('No results found');
    }
  }, [cars, isLoading]);

  return (
    <div className={clsx(s.filter_item)}>
      <Toaster />
      <div className={clsx(s.brand)}>
        <p className={clsx(s.text_filter)}>Car brand</p>
        <Select
          className={clsx(s.select)}
          options={brandOptions}
          onChange={selected => handleChange('brand', selected)}
          value={filters.brand}
          placeholder="Enter the text"
          classNamePrefix="react-select"
        />
      </div>
      <div className={clsx(s.brand)}>
        <p className={clsx(s.text_filter)}>Price/1 hour</p>
        <Select
          className={clsx(s.select)}
          options={priceOptions}
          onChange={selected => handleChange('price', selected)}
          value={filters.price}
          placeholder="To $"
          classNamePrefix="react-select"
        />
      </div>
      <div className={clsx(s.brand)}>
        <p className={clsx(s.text_filter)}>Car mileage / km</p>
        <input
          className={clsx(s.filter_input)}
          type="number"
          placeholder="From"
          value={filters.mileageFrom}
          onChange={e => handleChange('mileageFrom', e.target.value)}
        />
        <input
          className={clsx(s.filter_input2)}
          type="number"
          placeholder="To"
          value={filters.mileageTo}
          onChange={e => handleChange('mileageTo', e.target.value)}
        />
      </div>
      <button type="button" onClick={handleFilter} className={clsx(s.search)}>
        Search
      </button>
      <button type="button" onClick={handleReset} className={clsx(s.reset)}>
        Reset
      </button>
    </div>
  );
};

export default FilterCar;
