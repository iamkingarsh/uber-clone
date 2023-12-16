import { configureStore } from '@reduxjs/toolkit'
import navSlice, { navReducer } from './slices/navSlice'


const store = configureStore({
  reducer: {
    nav: navSlice 
  }
})



const RootState = store.getState()
const AppDispatch = store.dispatch

export { RootState, AppDispatch }
export default store
