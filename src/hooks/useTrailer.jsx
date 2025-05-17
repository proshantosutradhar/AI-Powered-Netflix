import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../store/reducers/movieSlice';
import { APIOptions } from '../component/utils/apiHeader';

function useTrailer(id) {
    
  const dispatch = useDispatch();
     const {trailer} = useSelector((store)=>store.movies)

      const getTrailer = async()=>{
          const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,APIOptions);
          const json = await data.json();
          const filteredData = json.results.filter((movie)=> movie.type == 'Trailer')
         const trailer = filteredData? filteredData[0]: json[0];
          dispatch(addTrailer(trailer))
        
      }
  
      useEffect(()=>{
          !trailer && getTrailer()
      }, [])
}

export default useTrailer
