/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Header() {
  const navigate = useNavigate()
  const { user, logoutUser } = useAuth()
  const logoutClick = () => {
    navigate('/login')
  }
  return (
    <div className=' container max-w-4xl md:max-w-full px-20 py-[33px] border border-red-500 bg-black/90 fixed top-0 z-50'>
      <div className=' flex align-middle justify-between'>
        <div to='/home' className=' text-white font-medium text-lg hover:text-gray-500 hover:dark:text-gray-600 '>
            logo
        </div>
        <div className=' flex space-x-8'>
          {
            user ? (
              <>
            <Link to='/' className=' text-white font-medium text-lg hover:text-gray-500 hover:dark:text-gray-600 transition-all delay-200 ease-in-out'>Home</Link>
            <Link to='/about' className=' text-white font-medium text-lg hover:text-gray-500 hover:dark:text-gray-600 transition-all delay-200 ease-in-out'>About</Link>
            <Link to='/cart' className=' text-white font-medium text-lg hover:text-gray-500 hover:dark:text-gray-600 transition-all delay-200 ease-in-out'>Cart</Link>
            <button type="button" onClick={logoutUser} className='text-white font-medium text-lg hover:text-gray-500 hover:dark:text-gray-600 transition-all delay-200 ease-in-out'>Logout</button>
            </>
            ) : null
          }
            
        </div>
      </div>
    </div>
  )
}

export default Header

// (
//   <Link to='/login'>Login</Link>
// )
