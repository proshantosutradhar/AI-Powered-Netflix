import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import movieReducer from './reducers/movieSlice'
import gptReducer from './reducers/gptSlice'



export const appStore = configureStore({
   reducer:{
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
   }
})