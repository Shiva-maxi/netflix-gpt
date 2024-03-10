import {  useDispatch } from "react-redux";
import { useEffect } from "react";
 

import { options } from "../utils/constants";
import { addtrailer } from "../utils/movieslice";
const useGetplayingtrailer = (movieid) => {
  const dispatch = useDispatch();
  
  const Getmovietrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",
      options
    );
    const json = await data.json();
    console.log(json.results);
    const maindata = json.results;
    const filterdata = maindata.filter((vid) => vid.type == "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addtrailer(trailer));
  };
  useEffect(() => {
    Getmovietrailer();
  });
};

export default useGetplayingtrailer;
