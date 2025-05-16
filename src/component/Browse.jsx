import React from 'react'
import Header from './partials/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux';
import HeroSection from './partials/HeroSection';
import TheTrailer from './partials/TheTrailer';
import SecondContainer from './partials/SecondContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';

function Browse() {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    const movies = useSelector((store) =>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const movie = movies[0];
    const {title, overview, id} = movie;
    
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HeroSection title ={title} overview={overview} />
      <TheTrailer id={id} />
      <SecondContainer />
      
    </div>
  )
}

export default Browse
