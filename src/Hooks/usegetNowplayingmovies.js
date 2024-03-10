import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { Store } from "@reduxjs/toolkit";
import { addnowplayingmovies } from "../utils/movieslice";
const useNowplayingmovies = () => {
  const dispatch = useDispatch();
  const getNowplayingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );

    const json = await data.json();
    console.log("subbu");
    dispatch(addnowplayingmovies(
        json.results
    ))
  };

  useEffect(() => {
    getNowplayingmovies();
  }, []);
};

export default useNowplayingmovies;