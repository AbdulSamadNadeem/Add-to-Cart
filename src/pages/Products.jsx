import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiShoppingCart } from 'react-icons/ci'

const Products = () => {
  const dispatch  = useDispatch()
  const data  = useSelector((state)=>state?.products)
  console.log(data)
  return (
    <div>
    <div className='flex justify-around items-center h-24 bg-blue-300'>
     <div><h1 className='text-5xl font-light text-yellow-50'>E-Commerce Web</h1></div>
     <div>
      <ul>
      <li className='flex items-center' onClick={()=>navigate('/cart')}><CiShoppingCart className='text-4xl font-light text-yellow-50 hover:text-black'/><span>{data?.length}</span></li>
      </ul>
      </div>
    </div>
    <div className='mt-8'>
           <div>
            <h1 className='text-5xl font-light text-yellow-50 text-center underline'>Your Products</h1>
           </div>
           <div className='flex flex-wrap justify-around gap-10 mt-10'>
            {
              data.length > 0 ? (
                data.map((item)=>{
                  return(
                    <>
                    <div className='w-72 border-2 border-white rounded-xl flex flex-col items-center justify-between gap-4'>
                      <div>
                         <img src={item.image} className='w-72 h-60' />
                      </div>
                      <div>
                        <h1 className='text-2xl fonr-light text-yellow-50'>{item.title}</h1>
                        <p className='font-light text-yellow-50 text-lg'>{item.description.split('').slice[0,15]}</p>
                      </div>
                      <button onClick={()=>dispatch({type:'remove' , payload:item})} className='w-40 h-16 bg-blue-300 rounded-lg text-center text-2xl font-light text-yellow-50 hover:border-2 hover:border-blue-600'>Remove Product</button>
                    </div>
                    </>
                  )
                })
              ):<h1 className='text-5xl font-light text-yellow-50 text-center'>No Products Are Added</h1>
           
            }
           </div>
    </div>
    </div>
  )
}

export default Products