import React, { useEffect, useRef, useState } from "react";
import Header from "./partials/Header";
import background from "./../assets/images/background.jpg";
import useGPTResults from "../hooks/useGPTResults";
import useTmdbSearch from "../hooks/useTmdbSearch";
import GPTResultsContainer from "./partials/GPTResultsContainer";
import { useSelector } from "react-redux";

function GPTPage() {
  const { gptResult } = useSelector((store) => store.gpt);

  const [searchQuery, setSearchQuery] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState("Search Movies");

  useGPTResults(searchQuery);
  useTmdbSearch();

  const gptSearch = useRef(null);

  const handleGPTSearch = () => {
    setSearchQuery(gptSearch.current.value);
    setInputValue("");
    setLoading("Loading...");
  };

  useEffect(() => {
    if (gptResult) {
      setLoading("Search Movies");
    }
  }, [gptResult]);

  return (
    <div>
      <Header />
      <div className="bg-black w-[100%] fixed min-h-[121.5vh] z-1 top-0 opacity-60"></div>
      <div>
        <img className="w-[100vw] fixed min-h-screen" src={background} alt="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-50 h-[20vh] rounded-xl text-white bg-black/75 w-[50%] absolute mx-auto left-0 right-0 top-[30%] flex justify-center items-center"
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={gptSearch}
          className="border w-[60%] py-3 px-4 rounded-lg mr-3"
          placeholder="What Kind of Movies are you looking for?"
          type="text"
        />
        <button
          onClick={handleGPTSearch}
          className="py-3 text-bold rounded-lg px-4 bg-red-600"
        >
          {loading}
        </button>
      </form>

      <div className="w-full z-50 relative top-100">
        <GPTResultsContainer />
      </div>
    </div>
  );
}

export default GPTPage;
