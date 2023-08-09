import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { ModalState } from './modal/slice';

export default configureStore({
  reducer: {
    modal: modalReducer
  },
});


export interface RootState {
  modal: ModalState;
}