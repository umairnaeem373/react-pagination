import React from 'react'


function Products({products}) {
  return (
    <div>
    <h1 className='w-full text-left text-blue-300 font-bold text-4xl p-4'>Products</h1>
    <div className='border mx-auto w-3/4 flex flex-wrap justify-center gap-10 py-4'>
    {
      products?.map(({image , title , price},i) =>{
        return(
          <div className=' border w-[250px] rounded-md text-start' key={i}>
                    <img className='h-[400px] p-2' src={image} alt="" />
                    <p className='truncate px-3'>{title}</p>
                    <h2 className='font-semibold  px-3'>${price}</h2>
                </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default Products