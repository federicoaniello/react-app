import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../model/IProduct';

export interface ModalState {
  modalData: IProduct | null;
}

const initialState: ModalState = {
  modalData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IProduct>) => {
      state.modalData = action.payload;
    },
    resetData: (state) => {
      state.modalData = null;
    },
  },
});

export const { setData, resetData } = modalSlice.actions;

export default modalSlice.reducer;
