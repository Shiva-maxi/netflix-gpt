import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/Validate";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [signin, isSignin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errormessage, setErrormessage] = useState(null);
  const togglehandler = () => {
    isSignin(!signin);
  };
  const handlevalidation = () => {
    const e = email.current.value;
    const p = password.current.value;
    console.log(e, p);
    const message = validation(e, p);
    setErrormessage(message);
    if(message){
      return;
    }
     
      if (!signin) {
        createUserWithEmailAndPassword(auth, e, p)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
          // ..
        });
      
    }
    
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="nf-logo"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="  absolute  bg-black p-12 w-3/12 my-28 mx-auto right-0 left-0 h-100 text-white bg-opacity-80"
      >
        <h1 className="text-3xl py-3">{signin ? "Sign In" : "Sign Up"}</h1>
        {!signin && (
          <input
            type="text"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
            placeholder="Full Name"
          ></input>
        )}
        <input
          type="text"
          placeholder="email"
          ref={email}
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        {errormessage && (
          <p className="font-bold text-red-600 text-lg">{errormessage}</p>
        )}
        <button
          onClick={() => handlevalidation()}
          className="bg-red-700 p-2 w-full py-3 my-3 rounded-lg"
        >
          {" "}
          {signin ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 " onClick={() => togglehandler()}>
          {isSignin
            ? "New to Netflix? Sign Up Now"
            : "Already Registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
