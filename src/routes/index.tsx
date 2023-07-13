import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'
const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
