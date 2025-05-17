import React, { useEffect } from 'react'
import { APIOptions } from '../component/utils/apiHeader'
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../store/reducers/movieSlice';

function useNowPlayingMovies() {
   const dispatch = useDispatch()

   const {nowPlayingMovies} =useSelector((store)=>store.movies)
 const getNowPlayingMovies = async ()=>{
    try{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',APIOptions);
    const movie = await data.json();
    
    dispatch(addMovies(movie.results))
    } catch(e){
      console.log(e)
    }
 }

 useEffect(()=>{
   !nowPlayingMovies && getNowPlayingMovies()
 },[])
}

export default useNowPlayingMovies
