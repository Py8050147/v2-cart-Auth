import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/cartSlice'

function About() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  useEffect(() => {
       (async() => {
        try {
          const response = await fetch('https://fakestoreapi.com/products')
          const data = await response.json()
          setProducts(data)
          console.log(data)
        } catch (error) {
          console.error(error)
          throw error
        }
       })()
  }, [setProducts])

  const handleClick = (product) => {
    dispatch(addCart(product))
    // console.log("done", dispatch(addCart(product)))
  }
  return (
    <div className=' conatiner max-w-4xl md:max-w-full px-12 xl:px-20 py-10 mx-auto bg-black  mt-24'>
      <div className=' grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          products.map((product) => (
            <div key={product.id} className=' p-5 bg-white rounded-md shadow-md'>
              <div className=' flex align-middle justify-center'>
              <img src={product.image} alt={product.name} className='h-40 w-1/2'/>
              </div>
              <h2 className=' text-xl font-bold'>{product.title}</h2>
              {/* <p className=' text-gray-500'>{product.description}</p> */}
              
              <p className=' text-gray-500'>${product.price}</p>

              <div className=' w-full flex align-middle justify-center'>
                <button type="button" className=' border border-gray-500 py-3 px-3 bg-slate-500 text-white rounded-md font-medium transition-color delay-100 ease-in-out active:bg-blue-600 focus:bg-slate-700' onClick={() => handleClick(product)}>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default About
