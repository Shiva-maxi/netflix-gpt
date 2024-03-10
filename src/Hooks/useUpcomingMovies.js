import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { Store } from "@reduxjs/toolkit";
import { addupcomingmovies } from "../utils/movieslice";
const useUpcomingMovies= () => {
  const dispatch = useDispatch();
  const upcomingmovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
      options
    );

    const json = await data.json();
    console.log("subbu");
    dispatch(addupcomingmovies(
        json.results
    ))
  };

  useEffect(() => {
    upcomingmovies();
  }, []);
};

export default useUpcomingMovies