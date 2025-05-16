import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import movieReducer from './reducers/movieSlice'


export const appStore = configureStore({
   reducer:{
    user: userReducer,
    movies: movieReducer,
   }
})