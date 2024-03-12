import React  from "react";
import  useNowplayingmovies from "../Hooks/usegetNowplayingmovies";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useGetpopularmovies from "../Hooks/useGetPopularMovies";
import useTopratedmovies from "../Hooks/useTopratedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";
 

const Browse = () => {
  const issearchgpttrue=useSelector((store)=>store.gpt.issearchgpt);
  useNowplayingmovies();
  useGetpopularmovies();
  useTopratedmovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {issearchgpttrue?
      <Gptsearch/>:(
        <>
        <Maincontainer/>
        <Secondarycontainer/>
        </>
      )
      }
      
    </div>
  );
};

export default Browse;
