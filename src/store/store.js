import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './modal/modal-store'

export default configureStore({
  reducer: {
    modal: modalSlice
  },
})