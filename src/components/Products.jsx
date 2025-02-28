import React from 'react'
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data)) 
          .catch((err) => console.error("Error fetching products:", err));
      }, []);
  return (
    <>
       
     <div className="flex text-[#402219] pl-10 h-[300px] justify-center items-center flex-col flex-wrap space-x-4 overflow-x-auto scrollbar-hide">
        {products.length > 0 ? (
            products.map((product) => (
                <div key={product.id} className="group relative h-[260px] w-[200px] bg-[#E7E7E7] flex flex-col justify-center items-center">
                    <img src={product.image} alt="" className='h-[120px] mix-blend-multiply duration-300 hover:translate-y-[-10px] hover:scale-110' />
                 <div className='absolute flex space-x-30 pb-2 items-center bottom-0'>
                    <p>{product.price}</p>
                    <IoIosArrowRoundForward color='black' className='rotate-[-25deg]'/>
                </div>
            </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
    </>
  );
}

export default Products