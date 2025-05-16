import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useTrailer from '../../hooks/useTrailer';

function TheTrailer({id}) {
    const trailerId = useSelector((store) =>store.movies?.trailer);
    useTrailer(id)

  return (
    <div>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailerId?.key}?autoplay=1&loop=1&playlist=${trailerId?.key}&mute=1&iv_load_policy=3`}></iframe>
    </div>
  )
}

export default TheTrailer
