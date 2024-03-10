import React from 'react'
import { Store } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'
const Maincontainer = () => {
  const movies=useSelector((store)=>store.movie?.nowplayingmovies);
  if(movies==null){
    return;
  }
  const mainmovie=movies[2];
  const {original_title,overview,id}=mainmovie;
  console.log(mainmovie);
  return (
    <div>
      <Videotitle title={original_title} overview={overview}/>
      <Videobackground movieid={id} />
    </div>
  )
}

export default Maincontainer
