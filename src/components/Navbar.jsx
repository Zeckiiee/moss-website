import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBagContent, setShowBagContent] = useState(false);

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="flex w-full justify-center items-center text-[#B77870] bg-[#402219]">
        <h6 className="text-sm p-1">*FAST & FREE SHIPPING ON ORDERS OVER $50!*</h6>
      </div>

      <div className="h-20 w-[95.8%] flex justify-between items-center shadow-sm md:shadow-none bg-white md:border-b-[2px] border-[#D3D3D3] ">

        <h1 className="text-3xl font-bold text-[#402219] pl-5 md:pl-0 cursor-pointer">MOSS</h1>

        <div className="relative flex justify-around md:justify-center items-center text-[#402219]">
          <ul
            className={`absolute  md:static space-x-3 z-10 bg-white md:bg-none top-13 md:top-0 w-70 md:w-auto h-screen md:h-auto flex justify-around md:justify-center items-center flex-col md:flex-row duration-300 md:duration-0 shadow-xl md:shadow-none 
             ${showNavbar ? "translate-x-[-80px] md:translate-x-[0px]" : "translate-x-[500px] md:translate-x-[0px]"} `}
          >
            {["DISCOVER", "APPAREL", "BAGS", "SHOES", "HOLIDAY PICKS", "OTHERS"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                {item}
                <span className=" absolute left-0 bottom-0 w-0 h-[2px] bg-[#402219] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center pr-5">
            <p className="text-xl block md:hidden cursor-pointer">MENU</p>
            <IoMenuSharp size={25} onClick={() => setShowNavbar(!showNavbar)} className="block md:hidden cursor-pointer" />
          </div>
        </div>

        <div className="hidden md:block space-x-5 ">
          <button className="border-r-[2px] pr-5 cursor-pointer hover:text-[#B77870]">LOGIN</button>
          <button onClick={() => setShowBagContent(!showBagContent)} className="cursor-pointer hover:text-[#B77870]">BAG (03)</button>
        </div>
      </div>

      {showBagContent && (
        <div className="absolute top-20 right-5 w-64  shadow-lg p-5 transition-transform transform duration-300 bg-white">
          <div className="absolute top-[-10px] right-5 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] shadow-2xl border-b-white"></div>
          <h2 className="text-xl font-bold mb-2">Your Bag</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
