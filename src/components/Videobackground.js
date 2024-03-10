import React from "react";
import usegetplayingtrailer from "../Hooks/usegetmovietrailer";
import { useSelector } from "react-redux";
import { Store } from "@reduxjs/toolkit";
const Videobackground = ({movieid}) => {
  const trailerid = useSelector((store) => store.movie?.nowplayingtrailer);
  usegetplayingtrailer(movieid);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerid?.key+"?&autoplay=1"+"&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Videobackground;