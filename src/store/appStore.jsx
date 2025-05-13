import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'

export const appStore = configureStore({
   reducer:{
    user: userReducer
   }
})