import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    data:null
  },
  reducers: {
    setData: (state,payload) => {
      state.value = payload.payload
    },
    resetData: (state) => {
      state.data = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setData, resetData } = modalSlice.actions

export default modalSlice.reducer