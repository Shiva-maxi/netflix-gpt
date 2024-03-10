import React from 'react'
import Moviecard from './Moviecard'
const Movielist = ({title,movies}) => {
    console.log(movies);
    if(movies===null){
      return;
    }
  return (
    <div className='p-6'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            
            <div className='flex  '>
                {movies.map((m)=>{
                  return <Moviecard key={m.id} poster={m.poster_path}/>
                })}
                
            </div>
            
        </div>
        
      
    </div>
  )
}

export default Movielist
