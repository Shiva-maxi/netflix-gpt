import React, { useRef } from "react";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addgptmoviesresults } from "../utils/gptslice";
import { useDispatch } from "react-redux";
const Gptsearchbar = () => {
  const searchtext = useRef(null);
  const dispatch=useDispatch();
  const getmoviedetails = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +movie +'&include_adult=false&language=en-US&page=1',
      options
    );
    const json =await  data.json();
    console.log(json);

    return json.results;
  };
  const handlegptsearch = async () => {
    const gptquery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchtext.current.value +
      ". only give me names of 5 movies, comma seperated like the example results given ahead. Example Results: move1,movie2,movie3,movie4,movie5.";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices);

    const gptmovies = chatCompletion?.choices[0]?.message?.content.split(",");

    const gptmoviedetails=gptmovies.map((m)=>getmoviedetails(m));
    const promisesresolved=await Promise.all(gptmoviedetails);
    dispatch(addgptmoviesresults({
        gptMovies:gptmovies,
        gptResults:promisesresolved
    }))
    console.log(promisesresolved);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="p-5 bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          className="py-2 px-2  col-span-9"
          type="text"
          placeholder="Enter Movie"
        />
        <button
          onClick={() => handlegptsearch()}
          className=" text-white border col-span-3 border-white bg-red-700 rounded-lg ml-3 px-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
