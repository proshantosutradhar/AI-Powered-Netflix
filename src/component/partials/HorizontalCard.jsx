import React from 'react'
import SingleMoviesRow from './SingleMoviesRow'

function HorizontalCard({title, movies}) {
  return (
    <div className='w-[90vw] mx-auto py-2'>
      <h2 className='text-3xl text-white font-bold py-8'>{title.toUpperCase()}</h2>
      {movies?.length > 6? <div className='flex gap-4 overflow-x-scroll scrollbar-custom'>
        {movies && movies.map((movie)=>( <SingleMoviesRow key={movie.id} posterPath={movie.poster_path} />))}
      </div>: <div className='flex gap-4 overflow-x-scroll scrollbar-custom hide-scrollbar'>
        {movies && movies.map((movie)=>( <SingleMoviesRow key={movie.id} posterPath={movie.poster_path} />))}
      </div>}
    </div>
  )
}

export default HorizontalCard
