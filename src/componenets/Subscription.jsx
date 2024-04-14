import React from 'react'
import { Link } from 'react-scroll'

const Subscription = () => {
  return (
    <div className="w-full px-4  bg-[#0a183d] py-8">
      <div className="max-w-[1240px] grid  sm:grid-cols-2 grid-cols-1 sm:px-4 px-0 sm:gap-1 gap-7 sm:pb-16 sm:pt-16 pb-10 mx-auto   ">
      <div>
      <h1 className="text-white font-bold text-4xl sm:text-6xl py-6  max-w-[1240px] mx-auto">
      Subscription from $15/month

      </h1>
      <p className='text-[#fc0254] text-3xl font-semibold'>Start a free trial now</p>
      <p className='text-gray-400 py-6'> button Select "Google" Create your email address and password Set up your account Accept the terms of service Sign in to your new account..

Choose a plan
SolMusic is the one-stop music streaming. Gaana offers you free, your favourite Hindi Songs, Bollywood Music, Regional Music, Bhajans & Mantra, Hanuman Chalisa, Aigiri Nandini, Podcast, lyrics & Video songs.</p>
      <Link  to="header" spy={true}  smooth={true} offset={0} duration={1200}  className="bg-[#fc0254] cursor-pointer text-white rounded-full px-10 relative top-4 py-5  font-semibold">TRY IT NOW</Link>

      </div>
      <div className='mx-auto bg-[#1c294a]  w-full text-start text-white text-[19px] items-center gap-5 relative top-10 py-10 rounded-[50px] flex-col '>
      <div className='flex items-center ml-4 p-4 sm:ml-[4cm]   gap-3 '>
      <span className='h-3 w-3 bg-red-600 rounded-full'></span>
      <h1 className='pl-2'>Play and track</h1>

      </div>
      <div className='flex items-center  ml-4 p-4 sm:ml-[4cm]    text-start  gap-3'>
      <span className='h-3 w-3 bg-red-600 rounded-full'></span>
      <h1 className='pl-2'>Listen offline</h1>

      </div>
      <div className='flex items-center  ml-4 p-4 sm:ml-[4cm]    gap-3'>
      <span className='h-3 w-3 bg-red-600 rounded-full'></span>
      <h1 className='pl-2'>No ad interruptions</h1>

      </div>
      <div className='flex items-center  ml-4 p-4 sm:ml-[4cm]    gap-3'>
      <span className='h-3 w-3 bg-red-600 rounded-full'></span>
      <h1 className='pl-2'>Unlimited skips</h1>

      </div>
      <div className='flex items-center  ml-4 p-4 sm:ml-[4cm]    gap-3'>
      <span className='h-3 w-3 bg-red-600 rounded-full'></span>
      <h1 className='pl-2'>High quality audio</h1>

      </div>
      <div className='flex items-center ml-4 p-4 sm:ml-[4cm]    gap-3'>
      <span className='h-3 w-3 bg-red-600 rounded-full'></span>
      <h1 className='pl-2'>Shuffle play</h1>

      </div>
      
      </div>
    
    </div>
    </div>
  )
}

export default Subscription