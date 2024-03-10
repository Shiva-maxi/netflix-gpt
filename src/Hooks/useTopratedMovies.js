import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { Store } from "@reduxjs/toolkit";
import { addtopratedmovies } from "../utils/movieslice";
const useTopratedmovies = () => {
  const dispatch = useDispatch();
  const topratedmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );

    const json = await data.json();
    console.log("subbu");
    dispatch(addtopratedmovies(
        json.results
    ))
  };

  useEffect(() => {
    topratedmovies();
  }, []);
};

export default useTopratedmovies;