import React from 'react'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Layout from '@/layout/index'
const routes = [
  {
    path: '/login',
    element: <Login />,
    name: 'login',
    meta: {
      title: 'login',
      hidden: true
    }
  },
  {
    path: '/',
    element: <Layout />,
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: ''
    },
    children: [
      {
        path: 'home',
        element: <Home />,
        meta: {
          title: '首页',
          hidden: false
        }
      }
    ]
  }
]

export default routes
