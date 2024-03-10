import React, { useEffect } from 'react'
import { options } from '../utils/constants'
const Videotitle = ({title,overview}) => {
    
  return (
    <div className='pt-[20%] px-10 absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='py-5 w-1/4 text-white'>{overview}</p>
      <div>
        <button className='bg-gray-500 px-9 rounded-lg py-4 font-bold border text-white bg-opacity-60'>Play</button>
        <button className='bg-gray-500 ml-2 px-7 rounded-lg py-4 font-bold text-white bg-opacity-60'>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle