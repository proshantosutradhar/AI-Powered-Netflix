import React from 'react'

function SingleMoviesRow({posterPath}) {
  if(posterPath ==null) return;
  return (
    <div className='min-w-44 w-44 mb-4'>
     
      {posterPath && <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="" />} 
     
    </div>
  )
}

export default SingleMoviesRow;
