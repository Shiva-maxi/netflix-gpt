import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { Store } from "@reduxjs/toolkit";
import { addpopularmovies } from "../utils/movieslice";
const useGetpopularmovies = () => {
  const dispatch = useDispatch();
  const popularmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );

    const json = await data.json();
    console.log("subbu");
    dispatch( addpopularmovies(
        json.results
    ))
  };

  useEffect(() => {
    popularmovies();
  }, []);
};

export default useGetpopularmovies;