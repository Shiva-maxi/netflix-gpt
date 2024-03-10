import React, { useEffect } from "react";
import  useNowplayingmovies from "../Hooks/usegetNowplayingmovies";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
const Browse = () => {
  useNowplayingmovies();
  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Browse;
