import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGPTResults, removeGPTMovie } from "../store/reducers/gptSlice";

function useGPTResults(searchQuery) {
    const dispatch = useDispatch()
    const {gptResult} = useSelector((store)=>store.gpt)
  useEffect(() => {
    if (!searchQuery) return;
    const finalQuery = `act as movie recommendation system, give only movies name of ${searchQuery}. dont provide any other text. only give the five movies name comma separated like the example ahead: don, kgf, houseful, salaar, bahubali`;
    const fetchGPTResponse = async () => {
      try {
        const response = await fetch("https://api.cohere.ai/v1/chat", {
          method: "POST",
          headers: {
            Authorization: "Bearer"+ process.env.REACT_APP_cohere_Api,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: finalQuery,
            model: "command-r-plus",
            chat_history: [],
            temperature: 0.7,
            max_tokens: 300,
          }),
        });
        const data = await response.json();
        
        const resultsArrey = data.text.split(',')

        dispatch(addGPTResults(resultsArrey)); 
      } catch (err) {
        console.error("GPT API Error:", err);
      }
    };

    !gptResult && fetchGPTResponse();
    return ()=>{
      dispatch(removeGPTMovie())
    }
  }, [searchQuery]);
}

export default useGPTResults;
