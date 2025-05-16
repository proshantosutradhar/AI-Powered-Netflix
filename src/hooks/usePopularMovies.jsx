import React, { useEffect } from 'react'
import { APIOptions } from '../component/utils/apiHeader'
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../store/reducers/movieSlice';

function usePopularMovies() {
   const dispatch = useDispatch()
 const getPopularMovies = async ()=>{
    try{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',APIOptions);
    const movie = await data.json();
    console.log(movie)
    dispatch(addPopularMovies(movie.results))
    } catch(e){
      console.log(e)
    }
 }

 useEffect(()=>{
    getPopularMovies()
 },[])
}

export default usePopularMovies
