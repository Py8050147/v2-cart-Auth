import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../store/cartSlice'

function Cart() {
  const dispatch = useDispatch()
    const products = useSelector((state) => state.cart)
    console.log(products)
    const handleRemove = (id) => {
        // removeCart(product)
         dispatch(removeCart(id));
        //  console.log("done", dispatch(removeCart(id)))
    };
  return products.length === 0 ? (
    <div className='conatiner min-h-screen max-w-4xl md:max-w-full px-20 py-10 mx-auto bg-gray-900 flex items-center justify-center'>
      <h1 className='text-2xl text-white text-center flex items-center justify-center gap-3  divide-solid divide-x divide-gray-500 py-5'>
    <span className='text-red-700 '>404</span>
    <span className='pl-3'>cart is empty</span>
  </h1>
    </div>
   
  ):(
    <div className=' conatiner min-h-screen max-w-4xl md:max-w-full px-20 py-32 mx-auto bg-gray-900'>
    <div className=' grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
         products.map((product) => (
          <div key={product.id} className='col-span-1 lg:w-80 p-5 bg-white rounded-md shadow-md'>
            <div className=' flex align-middle justify-center'>
            <img src={product.image} alt={product.name} className='h-40 w-1/2'/>
            </div>
            <h2 className=' text-2xl font-bold'>{product.title}</h2>
            {/* <p className=' text-gray-500'>{product.description}</p> */}
            <p className=' text-gray-500'>{product.price}</p>

            <div className=' w-full flex align-middle justify-center'>
              <button type="button" className=' border border-gray-500 py-3 px-3 bg-red-800 text-white rounded-md font-medium focus:bg-red-900' onClick={() => handleRemove(product.id)} >Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Cart
