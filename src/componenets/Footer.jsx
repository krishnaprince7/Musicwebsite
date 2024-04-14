import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const date =new Date
    const newdate=date.getFullYear()
    console.log(date.getFullYear())
  return (
    <div className="w-full px-4  bg-[#0a183d] py-8">
      <div className="max-w-[1240px] grid   sm:grid-cols-2 grid-cols-1 sm:px-4 px-0 sm:gap-1 gap-10 pt-16 pb-8 mx-auto   ">
      <div className="text-white flex flex-col sm:order-1 order-2" >
        <div>
        <h1 className="font-bold text-2xl  ">
              <span className="text-[#fc0254]">KRISHNA</span> MUSIC
            </h1>
            <p className="text-gray-400 text-[12px] font-semibold py-2">COPYRIGHT ©{newdate} ALL RIGHTS RESERVED | THIS WEBSITE IS MADE WITH  BY <spam className="text-blue-600"> KRISHNA..</spam></p>
            <div className="flex gap-10 mt-4 cursor-pointer ">
            <FaInstagram onClick={()=>{
              window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")
            }} className=" rounded-sm text-gray-400   scale-[1.2]" />
            <MdFacebook onClick={()=>{
              window.open("https://www.facebook.com/profile.php?id=100016002570229")
            }} className=" rounded-sm text-gray-400 scale-[1.2]" />
            <FaLinkedin onClick={()=>{
              window.open("https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
            }} className="  rounded-sm text-gray-400  scale-[1.2]" />
            <FaGithub onClick={()=>{
              window.open("https://github.com/krishnaprince7")
            }} className="  rounded-sm text-gray-400  scale-[1.2]" />
        
          </div>

        </div>
      </div>
      <div className=" text-white grid gap-10  sm:grid-cols-3 grid-cols-1 cursor-pointer sm:order-2 order-1" >
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">ABOUT US</h1>
       <ul className="flex  flex-col gap-3 text-gray-500 text-[15px]">
        <li>Our Story</li>
        <li>Sol Music Blog</li>
        <li>History</li>
       </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">PRODUCTS</h1>
       <ul className="flex  flex-col gap-3 text-gray-500 text-[15px]">
        <li>Music</li>
        <li>Subscription</li>
        <li>Custom Music</li>
        <li>Footage</li>
       </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">PLAYLISTS</h1>
       <ul className="flex  flex-col gap-3 text-gray-500 text-[15px]">
        <li>Newsletter</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Contact</li>
       </ul>
      </div>
     
    
      </div>

      </div>
    </div>
  );
};

export default Footer;
