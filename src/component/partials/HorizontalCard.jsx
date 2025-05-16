import React from 'react'
import SingleMoivesRow from './SingleMoivesRow'

function HorizontalCard({title, movies}) {
  return (
    <div className='w-[90vw] mx-auto py-2'>
      <h2 className='text-3xl text-white font-bold py-8'>{title}</h2>
      <div className='flex gap-4 overflow-x-scroll scrollbar-custom'>
        {movies && movies.map((movie)=>( <SingleMoivesRow key={movie.id} posterPath={movie.poster_path} />))}
      </div>
    </div>
  )
}

export default HorizontalCard
