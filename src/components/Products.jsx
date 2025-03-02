import React from 'react'
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


function Products({id, imageUrl, price}) {
   
  return (
    <>
      <div key={id} className="group lg:mb-10 hover:-translate-y-5 duration-300 relative h-[300px] w-[240px] bg-[#E7E7E7] flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#E7E7E7]">
        <img src={imageUrl} alt="" className='h-[120px] mix-blend-multiply duration-300 group-hover:translate-y-[-10px] group-hover:scale-110' />
        <div className='absolute flex space-x-30 pb-2 items-center bottom-0'>
          <p>{price}</p>
          <IoIosArrowRoundForward color='black' className='rotate-[-25deg]'/>
        </div>
      </div>
    </>
  );
}

export default Products