import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalData: null,
  },
  reducers: {
    setData: (state, action) => {
      state.modalData = action.payload;
    },
    resetData: (state) => {
      state.modalData = null;
    },
  },
});

export const { setData, resetData } = modalSlice.actions;

export default modalSlice.reducer;