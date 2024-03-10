import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";
import store from "../utils/appstore";
const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      {/* <Movielist /> */}
      <div className="-mt-52 relative z-20 ">
        <Movielist title={"Now Playing"} movies={movies.nowplayingmovies} />

        <Movielist title={"Popular"} movies={movies.nowplayingpopularmovies} />
        <Movielist title={"Top Rated"} movies={movies.nowplayingtoprated} />

        <Movielist
          title={"Upcoming Movies"}
          movies={movies.nowplayingupcoming}
        />
      </div>
    </div>
  );
};

export default Secondarycontainer;
