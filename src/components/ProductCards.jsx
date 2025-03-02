import React from 'react'

function ProductCards({imageUrl, category, title, price, id}) {
  return (
    <>    
      <div key={id} className='group hover:-translate-y-10 hover:shadow-lg hover:shadow-[#402219] duration-300 h-[350px] w-[300px] flex flex-col text-[#402219] justify-between items-center bg-[#F1F1F1] m-5'>
        <div className='mt-10'>
          <img src={imageUrl} alt="" className='mix-blend-multiply' />
        </div>
        <div className='w-full flex justify-between items-center bg-white'>
          <div className='pl-4'>
            <p>{category}</p>
            <h1>{title}</h1>
          </div>
          <p className='pr-4'>${price}</p>
        </div>
      </div>
    </>
  )
}

export default ProductCards