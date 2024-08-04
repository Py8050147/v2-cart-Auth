// import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useAuth } from './AuthContext'
function ProtectedRouter() {
    const {user} = useAuth()
    // const user = true
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRouter
