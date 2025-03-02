import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ManPicture from "../assets/pictures/pexels-cottonbro-6626876-removebg-preview.png";
import { IoIosArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import Products from '../components/Products';
import ProductCards from '../components/ProductCards';
import productsData from '../data/products';
import { MdFilterList } from "react-icons/md";
import firstBgPicture from "../assets/pictures/first-bg.png";
import secondBgPicture from "../assets/pictures/second-bg.png";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const [sortByOpen, setSortByOpen] = useState(false);

  const toggleSortBy = () => {
    setSortByOpen(!sortByOpen);
  };

  return (
    <>
      <Navbar />

      <div className='w-full flex justify-center items-center text-[#402219]'>
        <div className='w-full md:py-10 md:w-[95.8%] flex flex-col md:flex-row justify-center md:justify-start pl-5 md:pl-0 pb-5 md:pb-0 bg-[#F1F1F1] md:bg-white'>
          <div className='flex lg:flex-col items-center space-x-15 pt-8 md:pt-0 pb-2 md:pb-0'>
            <div className='flex relative md:hidden'>
              <div className='h-15 w-15 rounded-full overflow-hidden flex justify-center items-center bg-white'>
                <img src={ManPicture} alt="" />
              </div>
              <div className='h-13 w-13 absolute left-13 top-1 bg-[#EF8D68] rounded-full flex justify-center items-center rotate-[-40deg] transition-transform duration-300 hover:rotate-0'>
                <IoIosArrowRoundForward color='white' />
              </div>
            </div>
            <p className='block md:hidden'>30% Flat Sale<br /> Last-Minute Deals</p>
            <p className='hidden md:block max-w-[200px] min-w-[200px] lg:mt-5'>Explore our curated range of products to elevate every part of your life</p>
          </div>

          <div className='max-w-[670px] md:max-w-[630px] lg:ml-[250px]'>
            <h1 className='text-[45px] md:block lg:hidden'>DISCOVER EVERYTHING YOU NEED IN ONE PLACE</h1>
            <h1 className='text-[60px] hidden md:hidden lg:block'>ALL YOUR FAVORITE IN ONE PLACE</h1>
          </div>
        </div>
      </div>

      <div className='lg:w-full lg:h-[150vh] flex flex-col items-center justify-center'>
        <div className='w-[95.5%] border-b-[#D3D3D3] border-b-[2px] h-10 lg:flex justify-between hidden'>
          <div className='flex items-center w-[300px] justify-between'>
            <button className='cursor-pointer hover:text-[#EF8D68]'>FILTERS</button>
            <MdFilterList className='cursor-pointer hover:text-[#EF8D68]'/>
          </div>

          <div className='flex items-center relative'>
            <button className='cursor-pointer pr-2 hover:text-[#EF8D68]' onClick={toggleSortBy}>SORT BY</button>
            <IoIosArrowDown className='cursor-pointer hover:text-[#EF8D68]' onClick={toggleSortBy} />
            {sortByOpen && (
              <div className='absolute w-[200px] top-8 right-0 bg-white border z-10 border-gray-300 shadow-lg transition-transform transform scale-95 origin-top-right'>
                <ul className='p-2'>
                  <li className='px-4 py-2 cursor-pointer hover:bg-gray-200'>Price: Low to High</li>
                  <li className='px-4 py-2 cursor-pointer hover:bg-gray-200'>Price: High to Low</li>
                  <li className='px-4 py-2 cursor-pointer hover:bg-gray-200'>Newest Arrivals</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='w-[95.5%] flex justify-between items-center'>
          <div className='h-full border-r-[2px] border-r-[#D3D3D3] w-[400px] lg:flex hidden'>
            <div className='w-[90%] h-full space-y-5'>
              <div className='space-y-8'>
                <div>
                  {
                    ["CATEGORY", "PRICE NAME", "COLOR", "BRANDS", "FAST SHIPPING"].map((item) => (
                      <button key={item} className='flex items-center w-full justify-between border-b-[2px] border-[#D3D3D3] py-2 cursor-pointer hover:bg-gray-200'>{item} <IoIosArrowDown /></button>
                    ))
                  }
                  
                </div>

                <div>
                  <button className='w-full bg-[#F08C68] text-white py-2 hover:bg-[#3D231A] duration-300'>CLEAR FILTERS</button>
                </div>
              </div>

              <div className='lg:flex w-full h-[800px] overflow-y-auto flex-col space-y-10 hidden'>
                <div className='w-full flex flex-wrap items-center justify-center'>
                  {productsData.map((product) => (
                    <ProductCards
                      key={product.id}
                      id={product.id}
                      imageUrl={product.image}
                      title={product.name}
                      category={product.category}
                      price={product.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-full flex flex-col space-y-12 items-end'>
            <div className="flex text-[#402219] py-5 pl-2 lg:pl-0 h-[300px] lg:h-[600px] lg:w-[90%] flex-col lg:flex-row justify-around lg:justify-between items-center flex-wrap overflow-x-auto space-x-4 lg:space-x-0">
              {products.length > 0 ? (
                products.map((product) => (
                  <Products key={product.id} id={product.id} imageUrl={product.image} price={product.price} />
                ))
              ) : (
                <p>Loading products...</p>
              )}
            </div>
            <div className='h-[350px] w-[90%] lg:flex justify-between hidden items-center bg-[#F3F0E9]'>
              <div>
                <img src={firstBgPicture} alt="" />
              </div>
              <div className='text-center space-y-5'>
                <h1 className='text-3xl'>CAPTURE PRECISION ANYTIME, ANYWHERE</h1>
                <p>Get Fast, precise scans anywhere with our advanced Mobile Imaging Laser Scanner</p>
                <button className='bg-[#3D231A] text-white px-5 py-2 duration-300 hover:bg-[#EF8D68]'>EXPLORE</button>
              </div>
              <div>
                <img src={secondBgPicture} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col items-center space-y-10 justify-center lg:hidden'>
        <div className='w-full flex mt-5 text-[#402219]'>
          <h2 className='text-[40px]'>BESTSELLERS</h2>
        </div>
        <div className='w-full flex flex-wrap items-center justify-center'>
          {productsData.map((product) => (
            <ProductCards
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              title={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
