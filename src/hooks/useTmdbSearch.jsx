import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIOptions } from "../component/utils/apiHeader";
import { addGPTMovies } from "../store/reducers/gptSlice";

export default function useTmdbSearch() {
  const gptresults = useSelector((store) => store.gpt?.gptResult);
    const {gptMovies} = useSelector((store) => store.gpt);

  const dispatch = useDispatch()

  const getData = async () => {
    const getSearchResult = async (movieName) => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
      try {
        const data = await fetch(url, APIOptions);
        const result = await data.json();
        return result;
      } catch (e) {
        console.log("Tmdb response:" + e);
      }
    };

    const movieResult = gptresults.map((movie) => getSearchResult(movie));
    const tmdbResult = await Promise.all(movieResult);
    dispatch(addGPTMovies(tmdbResult))

  };

  useEffect(() => {
    if (!gptresults || gptresults.length === 0) return;

    !gptMovies && getData();
  }, [gptresults]);
}
