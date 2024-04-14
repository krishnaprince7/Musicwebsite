import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Header from "./Header";
import Work from "./Work";
import Subscription from "./Subscription";
import Whypremium from "./Whypremium";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Firstpage = () => {



  const [show, setshow] = useState(true);
  return (
    <>
      <div className="w-full py-4 px-4 bg-[#08192d]">
        <div className="max-w-1240px sm:px-8 py-6 mx-auto flex justify-between items-center text-white">
          <div>
            <h1 className="font-bold text-2xl">
              <span className="text-[#fc0254]">KRISHNA</span> MUSIC
            </h1>
          </div>

          <div>
            <ul className="sm:flex gap-9 font-semibold text-[17px] hidden cursor-pointer">
            <Link to="/login">Login</Link>
            <Link to="/sigup">Signup</Link>
            </ul>
          </div>
          <div
            className=" sm:hidden  flex items-center justify-center "
            onClick={() => {
              setshow(!show);
            }}
          >
            <h1>MENU</h1>
            {show ? <MdMenu size={30} /> : <MdClose size={30} />}
          </div>
        </div>
        <div className={show ? "hidden    " : "bg-[#1c294a]  w-full sm:hidden transition-all ease-in-out duration-500   px-4 py-4  "}>
          <ul className="flex flex-col text-white gap-3 text-[17px] font-semibold">
            <Link to="/login">Login</Link>
            <Link to="/sigup">Signup</Link>
          </ul>
        </div>
      </div>
      <Header />
      <Work/>
      <Subscription/>
      <Whypremium/>
      <Footer/>
    </>
  );
};

export default Firstpage;
