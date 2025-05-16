import React from 'react'

function SingleMoivesRow({posterPath}) {
  return (
    <div className='min-w-44 w-44 mb-4'>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="" />
    </div>
  )
}

export default SingleMoivesRow;
