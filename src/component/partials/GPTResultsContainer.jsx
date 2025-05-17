import React from 'react'
import { useSelector } from 'react-redux'
import HorizontalCard from './HorizontalCard'

function GPTResultsContainer() {
  const {gptResult, gptMovies} = useSelector((store)=>store.gpt)
  return gptResult && gptMovies && (
    <div>
        {console.log(gptMovies[0].results)}

     {gptResult.map((movie,index)=> (<HorizontalCard key={movie} title={movie} movies={gptMovies[index].results} />))}
    </div>
  )
}

export default GPTResultsContainer
