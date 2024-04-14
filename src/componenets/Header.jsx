import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Header = () => {

   const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      // If email is valid, redirect to next component
      navigate('/home');
    }
    else if(email === ""){
      alert("Enter your email")

    }
    else {
      // If email is invalid, display error message
      alert('Enter correct email!');

    }
  };



    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
          setShowFirst((prevShowFirst) => !prevShowFirst);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);


  return (
    <div id="header" className="w-full bg-[#0a183d]  sm:px-8 px-2 sm:pt-4 sm:pb-4 pt-2 pb-16">
      <div className="max-w-[1240px] grid  sm:grid-cols-2 grid-cols-1 sm:px-4 px-0 py-8 mx-auto ">
      <div>
      {showFirst ?  <div className={`transition-opacity pt-14 duration-500 ${showFirst ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-white text-start text-5xl sm:text-7xl font-bold ">
            {" "}
            <span className="text-[#fc0254]">Music</span> for everyone.
          </h1>
          <p className="text-white py-4 pr-10 text-[17px] font-semibold">
            Music can raise someone's mood, get them excited, or make them calm
            and relaxed. Music also - and this is important - allows us to feel
            nearly or possibly all emotions that we experience in our lives.
          </p>
          <div className="flex-col sm:flex-row sm:flex gap-4 ">
            <input className="bg-[#383b70] text-white pl-4 pr-8 py-4 rounded"  type="email"
                placeholder="Email address"
                value={email}
        onChange={(e) => setEmail(e.target.value)}/>

            <button onClick={validateEmail} className="bg-[#fc0254] text-white rounded-full sm:mt-0 mt-6 py-5 sm:py-0 px-6 font-semibold">START FREE TRIAL</button>
          </div>
        </div> 
        
        
        :  <div className={`transition-opacity pt-14 duration-[5s] ${showFirst ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-white text-start text-5xl sm:text-7xl font-bold ">
            {" "}
            <span className="text-[#fc0254]">Listen</span>to new music.
          </h1>
          <p className="text-white py-4 pr-10 text-[17px] font-semibold">
          There's always the obvious; paid streaming platforms like Spotify or Apple Music (via recommended lists, curated playlists, etc.), radio (once again, kind of meta),
           record shops or thrift stores, and even live shows.
          </p>
          <div className="flex-col sm:flex-row sm:flex gap-4">
            <input className="bg-[#383b70] text-white pl-4 pr-8 py-4 rounded" type="email"    placeholder="Email address"
                value={email}
        onChange={(e) => setEmail(e.target.value)}/>

            <button  onClick={validateEmail} className="bg-[#fc0254] text-white rounded-full sm:mt-0 mt-6 py-5 sm:py-0 px-6 font-semibold">START FREE TRIAL</button>
          </div>
        </div> }
    </div>
        
        <div className="hidden sm:block">
          <img className="pb-9 " src="/images/hero-bg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
