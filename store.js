import { configureStore } from '@reduxjs/toolkit'
import { navSlice } from './slices/navSlice'


const store = configureStore({
  reducer: navSlice.reducer,
})



export default store