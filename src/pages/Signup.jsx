import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Signup() {
  const navigate = useNavigate()
  const registerForm = useRef(null)
  const { registerUser } = useAuth()


  const handleSubmit = (e) => {
    e.preventDefault()
    if (registerUser) {
      navigate('/')
    }

    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password = registerForm.current.password.value

    const userInfo = { name, email, password }

    registerUser(userInfo)
   
  }

  return (
    <div className='flex align-middle justify-center py-32'>
      <form 
        className='flex flex-col border border-red-500 p-10 space-y-3' 
        onSubmit={handleSubmit} 
        ref={registerForm}
      >
        <label htmlFor="name" className='text-left'>Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder='Enter your Name' 
          className='font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md' 
        />
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
          <button type="submit" className='w-full bg-blue-800 py-2 text-white'>Signup</button>
        </div>
        <p>Already have an account? <Link to='/login' className='border-b border-b-red-500 text-red-500 font-bold text-lg'>Login</Link></p>
      </form>
    </div>
  )
}

export default Signup




// import React, { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth } from '../utils/AuthContext'

// function Signup() {
//   const registerForm = useRef(null)
//   const {registerUser} = useAuth()
//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const name = registerForm.current.name.value
//     const email = registerForm.current.email.value
//     const password = registerForm.current.password.value

    
//     const userInfo = {name, email, password}

//     registerUser(userInfo)
// }
//   return (
//     <div className=' flex align-middle justify-center py-32'>
//       <form action="" className=' flex flex-col border border-red-500 p-10 space-y-3' onSubmit={handleSubmit} ref={registerForm}>
//       <label htmlFor="name" className=' text-left'>Name</label>
//       <input type="text" placeholder='Enter your Name' className=' font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md'/>
//         <label htmlFor="username" className=' text-left'>Email</label>
//         <input type="email" placeholder='Enter your email' className=' font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md'/>
//         <label htmlFor="password" className=' text-left'>Password</label>
//         <input type="password" placeholder='Enter your password' className=' font-medium px-3 py-2 outline-none ring-1 ring-gray-600 rounded-md'/>
//         <div>
//             <button type="submit" className=' w-full bg-blue-800 py-2 text-white'>Signup</button>
//         </div>
//         <p>Create an Account <Link to='/login' className='border-b border-b-red-500 text-red-500 font-bold text-lg'>Login</Link></p>
//       </form>
//     </div>
//   )
// }

// export default Signup
