import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modal/slice'

export default configureStore({
  reducer: {
    modalSlice
  },
})