import React from 'react'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Layout from '@/layout/index'
export const constantRoute = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    name: 'layout',
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
]
