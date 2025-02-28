import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="w-full relative">
      <div className="flex w-full justify-center items-center text-[#B77870] bg-[#402219]">
        <h6 className="text-sm p-1">*FAST & FREE SHIPPING ON ORDERS OVER $50!*</h6>
      </div>

      <div className="h-20 flex justify-between items-center shadow-sm">

        <h1 className="pl-4 text-3xl font-bold text-[#402219]">MOSS</h1>

        <div className="relative pr-4 flex justify-around items-center space-x-1 md:space-x-10 text-[#402219]">
          <ul
            className={`absolute z-10 bg-white md:bg-none top-13 md:top-0 w-70 md:w-0 h-screen md:h-0 flex justify-around items-center flex-col md:flex-row  duration-300 md:duration-0 shadow-xl md:shadow-none 
             ${showNavbar ? "translate-x-[-80px] md:translate-x-[0px]" : "translate-x-[500px] md:translate-x-[0px]"} `}
          >
            <li>DISCOVER</li>
            <li>APPAREL</li>
            <li>BAGS</li>
            <li>SHOES</li>
            <li>HOLIDAY PICKS</li>
            <li>OTHERS</li>
          </ul>

          <p className="text-xl block md:hidden">MENU</p>
          

          <IoMenuSharp size={25} onClick={() => setShowNavbar(!showNavbar)} className="block md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
