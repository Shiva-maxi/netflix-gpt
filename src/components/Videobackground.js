import React from "react";
import usegetplayingtrailer from "../Hooks/usegetmovietrailer";
import { useSelector } from "react-redux";
import { Store } from "@reduxjs/toolkit";
const Videobackground = ({movieid}) => {
  const trailerid = useSelector((store) => store.movie?.nowplayingtrailer);
  usegetplayingtrailer(movieid);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerid?.key}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Videobackground;
