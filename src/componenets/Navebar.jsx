import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TiPinOutline } from "react-icons/ti";
import { useState } from 'react';

import { IoMusicalNotes } from "react-icons/io5";

const Navebar = () => {
  const [keyword,setkeyword] =useState("")
  return (

    <div className='bg-[#212529]  '>
    <div className='sm:max-w-[1280px] w-full sm:px-0 px-2 py-6 mx-auto grid sm:grid-cols-2 grid-cols-1 gap-4'>
    <div className=' flex sm:justify-start justify-between'>
    <div className='flex'>
        <IoMusicalNotes style={{color:"white"}} size={28}/>
        <h1 className='pl-2 text-xl text-white font-bold'>krishna-music</h1>
    </div>
    <div className='flex gap-3 rounded-md ml-3 ' style={{color:"white"}}>
    <div className='bg-[#6c757d] px-3 py-2'>

    <FaHeart/>
    </div>
    <div className='bg-[#6c757d] px-3 py-2'>

    <TiPinOutline/>
    </div>

    </div>


    </div>
    <div className=' flex gap-6  '>
    
            <input value={keyword} onChange={(event)=>{
              setkeyword(event.target.value)
            }} type="text" className='flex  w-full hover:border-white rounded pl-2 text-black   ' placeholder='Search'  style={{border:"none"}}    />

  
            <button className='text-white border px-4 py-1 font-bold rounded ' >Search</button>
        
    </div>

    </div>

    </div>
  )
}

export default Navebar