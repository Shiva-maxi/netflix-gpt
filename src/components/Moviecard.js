import React from 'react'
import { poster_url } from '../utils/constants'
const Moviecard = ({poster}) => {
  return (
    <div className="w-48 pr-4">
      <img className='w-30'  src={poster_url+poster} alt="movie poster"></img>
    </div>
  )
}

export default Moviecard
