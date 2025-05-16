import { createSlice } from "@reduxjs/toolkit";

 const moiveSlice= createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        topRated: null
    },
    reducers:{
        addMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
         addPopularMovies(state, action){
            state.popularMovies = action.payload;
        },
         addTopRatedMovies(state, action){
            state.topRated = action.payload;
        },
        addTrailer(state, action){
            state.trailer = action.payload;
        }
    }
})

export const {addMovies, addTrailer, addPopularMovies, addTopRatedMovies} = moiveSlice.actions;
export default moiveSlice.reducer;