import React from 'react'
import Navbar from '../components/Navbar'
import ManPicture from "../assets/pictures/pexels-cottonbro-6626876-removebg-preview.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import Products from '../components/Products';
import ProductCards from '../components/ProductCards';
import productsData from '../data/products'

function Home() {
  return (
    <>
      <Navbar/>

      <div className='w-full flex flex-col justify-center pl-5 pb-5 bg-[#F1F1F1] border-b-[#D1D1D1] border-b-[1px]'>
        <div className='flex space-x-15 pt-8 pb-2'>
          <div className='flex relative'>
            <div className='h-15 w-15 rounded-full overflow-hidden flex justify-center items-center'>
              <img src={ManPicture} alt="" />
            </div>
            <div className='h-13 w-13 absolute left-13 top-1 bg-[#EF8D68] rounded-full flex justify-center items-center rotate-[-40deg]'>
              <IoIosArrowRoundForward color='white'/>
            </div>
          </div>
          <p>30% Flat Sale<br/> Last-Minute Deals</p>
        </div>
        
        <div className='max-w-[670px]'>
          <h1 className=' text-[45px]'>DISCOVER EVERYTHING YOU NEED IN ONE PLACE </h1>
        </div>

      </div>

      <Products/>

      
    <div className=' flex w-full flex-col items-center space-y-10 justify-center'>
        <h2 className='text-[40px]'>BESTSELLERS</h2>
      <div className='w-full flex flex-wrap items-center justify-center '>
        {
          productsData.map((product)=>(
            <ProductCards id={product.id} imageUrl={product.image} title={product.name} category={product.category} price={product.price}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Home