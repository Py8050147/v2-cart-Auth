import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container max-w-4xl md:max-w-full py-8 lg:px-24 px-10 relative space-y-7 overflow-hidden ring-1 ring-gray-400 bg-black/90 text-white'>
        <div className='flex align-middle justify-between lg:flex-row flex-col  space-y-10'>
        <div className='flex align-middle justify-center h-[40px] w-[60px] bg-transparent scale-125  drop-shadow-2xl mt-8'>
                logo
            </div>
            <div>
                <ul className='cursor-pointer'>
                    <li className='font-sans font-semibold text-lg hover:text-stone-600 transition-colors delay-200 ease-in-out'><Link to='/'>Home</Link></li>
                    <li className='font-sans font-semibold text-lg hover:text-stone-600 transition-colors delay-200 ease-in-out'><Link to='/about'>About</Link></li>
                    <li className='font-sans font-semibold text-lg hover:text-stone-600 transition-colors delay-200 ease-in-out'><Link to='/cart'>Cart</Link></li>
                </ul>
            </div>
            <div className='flex flex-col align-top justify-between'>
           <div className=' space-x-5'>
           <button type='button' className='ring-2 ring-black px-3 py-2 rounded-md font-Monserat font-Monseratweight bg-black text-gray-400 transition-colors delay-200 ease-in hover:bg-transparent hover:text-black shadow-2xl shadow-purple-700 hover:text-black hover:bg-white'><Link to='/signup'>sign-up</Link></button>
           <button type="button"><Link to='/login' className='ring-2 ring-black px-3 py-2 rounded-md font-Monserat font-Monseratweight bg-stone-800 text-gray-400 transition-colors delay-200 ease-in hover:bg-transparent hover:text-black hover:bg-white shadow-2xl shadow-indigo-700'>Login</Link></button>
           </div>
            </div>
            <div className='flex flex-row '>
                <div className='md:space-x-0 space-y-5 -mt-5'>
                  <input className='  px-5 py-2 rounded-lg ring-1 ring-gray-400 outline-none bg-black' type="email" name="" id="" placeholder='pankaj@gamil.com'/>

                  <button type="button"><a href="#" className='ring-2 ring-black px-3 py-2 rounded-md font-Monserat font-Monseratweight bg-stone-800 text-gray-400 transition-colors delay-200 ease-in hover:bg-transparent hover:text-black shadow-2xl shadow-indigo-700 ml-5'>Submit</a></button>
                
                </div>
                
            </div>
        </div>

      </div>
  )
}

export default Footer
