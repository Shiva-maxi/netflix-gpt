import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userslice'
const approuter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/Browse',
        element:<Browse/>
    }
])
const Body = () => {

  const dispatch=useDispatch(); 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({
          uid:uid,email:email,displayName:displayName,photoURL:photoURL
        }))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser())
      }
    });
  },[])
  return (
    <RouterProvider router={approuter}/>
  )
}

export default Body
