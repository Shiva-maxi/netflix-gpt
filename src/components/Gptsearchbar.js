import React from 'react'

const Gptsearchbar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='p-5 bg-black w-1/2 grid grid-cols-12'>
            <input className='py-2 px-2  col-span-9' type="text" placeholder='Enter Movie'/>
            <button className=' text-white border col-span-3 border-white bg-red-700 rounded-lg ml-3 px-4'>Submit</button>
      </form>
    </div>
  )
}

export default Gptsearchbar
