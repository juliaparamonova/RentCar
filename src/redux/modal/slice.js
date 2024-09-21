import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedCar: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.selectedCar = action.payload;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      document.body.style.overflow = 'unset';
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
