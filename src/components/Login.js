import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [signin,isSignin]=useState(true);
    const togglehandler=()=>{
        isSignin(!signin);
    }
  return (
     
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="nf-logo"></img>
        </div>
        <form className='  absolute  bg-black p-12 w-3/12 my-28 mx-auto right-0 left-0 h-100 text-white bg-opacity-80'>
            <h1 className='text-3xl py-3'>{signin?"Sign In":"Sign Up"}</h1>
            {!signin && <input type="text" className='p-4 my-2 w-full bg-gray-700 rounded-lg' placeholder='Full Name'></input>}
            <input type='text' placeholder='email' className='p-4 my-2 w-full bg-gray-700 rounded-lg'/>
            <input type='password' placeholder='password' className='p-4 my-2 w-full bg-gray-700 rounded-lg'/>
            <button className='bg-red-700 p-2 w-full py-3 my-3 rounded-lg'> {signin?"Sign In":"Sign Up"}</button>
            <p className='mt-4' onClick={()=>togglehandler()}>
                {isSignin ?"New to Netflix?Sign Up Now":"Already Registered?Sign In Now"}
            </p>
        </form>
        
    </div>
     
     
  )
}

export default Login
