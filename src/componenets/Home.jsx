
import axios from "axios"
import React, { useEffect, useState } from 'react'

import { FaHeart } from "react-icons/fa";
import { TiPinOutline } from "react-icons/ti";
import { IoMusicalNotes } from "react-icons/io5";
import Home2 from "./Home2";
import Footer from "./Footer";
// import { Route, Routes } from 'react-router-dom'

const Home = () => {
  const [keyword, setkeyword] = useState("");

  const [krishna,setkrishna] =useState([])

  const url =` https://itunes.apple.com/search?term=${keyword}`
  useEffect(()=>{
      axios.get(url)
      .then((responce)=>{
         setkrishna(responce.data.results)
         console.log(responce.data.results)
      })
  },[url])

  return (
    <>

    <div>
      <div className="bg-[#212529]  ">
        <div className="sm:max-w-[1280px] w-full sm:px-0 px-2 py-6 mx-auto grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className=" flex sm:justify-start justify-between">
            <div className="flex">
              <IoMusicalNotes style={{ color: "white" }} size={28} />
              <h1 className="pl-2 text-xl text-white font-bold">
           <span className="text-[#fc0254]">KRISHNA  </span>
           MUSIC
              </h1>
            </div>
            <div
              className="flex gap-3 rounded-md ml-3 "
              style={{ color: "white" }}
            >
              <div className="bg-[#6c757d] px-3 py-2">
                <FaHeart />
              </div>
              <div className="bg-[#6c757d] px-3 py-2">
                <TiPinOutline />
              </div>
            </div>
          </div>
          <div className=" flex gap-6  ">
            <input
              value={keyword}
              onChange={(event) => {
                setkeyword(event.target.value);
                console.log(keyword)
              }}
              type="text"
              className="flex  w-full hover:border-white rounded pl-2 text-black   "
              placeholder="Search"
              style={{ border: "none" }}
            />

            <button className="text-white border px-4 py-1 font-bold rounded ">
              Search
            </button>
          </div>
        </div>
      </div>



      <div className="w-full  px-4 pt-4 ">
    <div className="max-w-[1240px]  justify-center items-center mx-auto grid sm:grid-cols-4 gap-6 grid-cols-1 ">
    {krishna.map((items,index)=>{
      return(
    

       <div key={items.id} className="my-4 mx-auto border-2 flex gap-2 flex-col  w-full" style={{boxShadow:"2px 2px 10px silver,"}}>
                  <img className="my-2 px-2" src={items?.artworkUrl100} alt="Image not found" style={{width:"auto",height:"300px",objectFit:"cover"}} />
                  <h1 className="text-xl px-2 font-semibold">Artist:{items?.artistName}</h1>
                  {/* <h1 className="text-xl px-2 font-semibold">Song Name:{items?.trackCensoredName}</h1> */}
                  <p className="text-start px-2">Song Name:{items?.trackCensoredName}</p>
                  <p className="text-start px-2">Relesed date: {items?.releaseDate}</p>
                  <audio className="mx-auto w-full sm:px-3 py-4" controls src={items.previewUrl}></audio>
                </div>
    

      
      )

     
    }
     )}


    </div>

    </div>
    </div>
    <Home2/>
    <Footer/>
    </>
  );
};

export default Home;
