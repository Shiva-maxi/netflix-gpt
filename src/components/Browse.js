import React  from "react";
import  useNowplayingmovies from "../Hooks/usegetNowplayingmovies";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useGetpopularmovies from "../Hooks/useGetPopularMovies";
import useTopratedmovies from "../Hooks/useTopratedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
const Browse = () => {
  useNowplayingmovies();
  useGetpopularmovies();
  useTopratedmovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Browse;
