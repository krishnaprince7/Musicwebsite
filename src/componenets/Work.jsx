import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { RxCursorArrow } from "react-icons/rx";
import { MdSmartphone } from "react-icons/md";
const Work = () => {
  return (
   
    <div className="w-full px-4  bg-[white] py-8">
      <h1 className="text-[#0a183d] font-bold text-5xl sm:text-7xl  max-w-[1240px] mx-auto">
        How it works
      </h1>
      <div className="max-w-[1240px] grid  sm:grid-cols-3 grid-cols-1 sm:px-4 px-0 sm:gap-1 gap-7 py-16 mx-auto   ">
        <div>
          <div>
            <RiAccountCircleLine className="text-[#fc0254] my-4" size={50} />
          </div>
          <h1 className="text-[#0a183d] text-2xl font-bold pb-4">Create an account</h1>
          <p className="text-gray-600 text-[16px] font-semibold pr-12">
            {" "}
            Open the Gmail app Tap the "Add account" button Select "Google"
            Create your email address and password Set up your account Accept
            the terms of service Sign in to your new account..
          </p>
        </div>
        <div>
          <div> 
            <RxCursorArrow className="text-[#fc0254] my-4" size={50} />
          </div>
          <h1 className="text-[#0a183d] text-2xl font-bold pb-4">Choose a plan</h1>
          <p className="text-gray-600 text-[16px] font-semibold pr-12">
            {" "}
            SolMusic is the one-stop music streaming. Gaana offers you free, your favourite Hindi Songs, Bollywood Music, Regional Music, Bhajans & Mantra, Hanuman Chalisa, Aigiri Nandini, Podcast, lyrics & Video songs.
          </p>
        </div>
        <div>
          <div>
            <MdSmartphone className="text-[#fc0254] my-4" size={50} />
          </div>
          <h1 className="text-[#0a183d] text-2xl font-bold pb-4 "> Download Music</h1>
          <p className="text-gray-600 text-[16px] font-semibold  pr-12">
            {" "}
            Stream your favourite Hindi songs, Bollywood music, English MP3 songs, radio, podcast and regional music online or download songs to enjoy anytime, anywhere!  Play your favourite music online for free or download mp3.
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default Work;
