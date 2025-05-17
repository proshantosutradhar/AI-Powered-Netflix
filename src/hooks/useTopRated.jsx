import React, { useEffect } from 'react'
import { APIOptions } from '../component/utils/apiHeader'
import { useDispatch, useSelector } from 'react-redux';
import { addMovies, addTopRatedMovies } from '../store/reducers/movieSlice';

function useTopRated() {
   const dispatch = useDispatch()
   const {topRated} = useSelector((store)=>store.movies)
 const getTopRatedMovies = async ()=>{
    try{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',APIOptions);
    const movie = await data.json();
    
    dispatch(addTopRatedMovies(movie.results))
    } catch(e){
      console.log(e)
    }
 }

 useEffect(()=>{
    !topRated && getTopRatedMovies()
 },[])
}

export default useTopRated
