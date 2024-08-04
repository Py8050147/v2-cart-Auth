import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Login() {
  const { user, loginUser } = useAuth()
  const navigate = useNavigate()
  const loginForm = useRef(null)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    const userInfo = { email, password }
    loginUser(userInfo)
  }

  return (
    <div className='flex align-middle justify-center py-32'>
      <form className='flex flex-col border border-red-500 p-10 space-y-3' onSubmit={handleSubmit} ref={loginForm}>
        <label htmlFor="email" className='text-left'>Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder='Enter your email' 
          className='font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md' 
        />
        <label htmlFor="password" className='text-left'>Password</label>
        <input 
          type="password" 
          name="password" 
          placeholder='Enter your password' 
          className='font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md' 
        />
        <div>
          <button type="submit" className='w-full bg-blue-800 py-2 text-white'>Login</button>
        </div>
        <p>Don't have an account? <Link to='/signup' className='border-b border-b-red-500 text-red-500 font-bold text-lg'>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login




// import React, {useEffect, useRef} from 'react'
// import { Link, Navigate } from 'react-router-dom'
// import { useAuth } from '../utils/AuthContext'

// function Login() {
//   const {user, loginUser} = useAuth()
//   const loginForm = useRef()
//   useEffect(() => {
//     if(user) {
//       Navigate('/')
//     }
//   }, [])
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const email = loginForm.current.email.value
//     const password = loginForm.current.password.value

//     const userInfo = {email, password}
//     loginUser(userInfo)
//   }
//   return (
//     <div className=' flex align-middle justify-center py-32'>
//       <form action="" className=' flex flex-col border border-red-500 p-10 space-y-3' onSubmit={handleSubmit} ref={loginForm}>
//         <label htmlFor="username" className=' text-left'>Username</label>
//         <input type="email" placeholder='Enter your email' className=' font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md'/>
//         <label htmlFor="password" className=' text-left'>Password</label>
//         <input type="password" placeholder='Enter your password' className=' font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md'/>
//         <div>
//             <button type="submit" className=' w-full bg-blue-800 py-2 text-white'>Login</button>
//         </div>
//         <p>Create an Account <Link to='/signup' className='border-b border-b-red-500 text-red-500 font-bold text-lg'>signup</Link></p>
//       </form>
//     </div>
//   )
// }

// export default Login
