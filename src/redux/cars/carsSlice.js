import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCarsThunk, fetchMoreCarsThunk } from './operations';

const initialState = {
  items: [],
  favoriteItems: [],
  filterItems: [],
  isLoading: false,
  isError: false,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.favoriteItems.indexOf(carId);
      if (index > -1) {
        state.favoriteItems.splice(index, 1);
      } else {
        state.favoriteItems.push(carId);
      }
    },
    filterCars: (state, action) => {
      const { brand, price, mileageFrom, mileageTo } = action.payload;

      state.filterItems = state.items.filter(car => {
        const isSelectBrand =
          !brand || car.make.toLowerCase() === brand.toLowerCase();
        const isSelectPrice =
          !price || car.rentalPrice.replace('$', '') <= price;
        const isSelectMileage =
          (!mileageFrom || car.mileage >= mileageFrom) &&
          (!mileageTo || car.mileage <= mileageTo);
        return isSelectBrand && isSelectPrice && isSelectMileage;
      });
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filterItems = action.payload;
      })

      .addCase(fetchMoreCarsThunk.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.filterItems.push(...action.payload);
      })

      .addMatcher(
        isAnyOf(fetchCarsThunk.fulfilled, fetchMoreCarsThunk.fulfilled),
        state => {
          state.isError = false;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(fetchCarsThunk.rejected, fetchMoreCarsThunk.rejected),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const { toggleFavorite, filterCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
