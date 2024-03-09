import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/appstore";
const Header = () => {
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" w-screen absolute px-2 py-3   bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="n-logo"
      ></img>
      {user &&<div className="flex">
        <img
          className="w-12 h-12 mt-3 "
          src={user?.photoURL}
        ></img>
        <button
          onClick={() => handlesignout()}
          className="text-white font-bold ml-2"
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
