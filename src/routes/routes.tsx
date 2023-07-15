import React from 'react'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Layout from '@/layout/index'
import Error from '@/pages/404'
import { HomeOutlined } from '@ant-design/icons'
import { Navigate } from 'react-router-dom'

export const constantRoute = [
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
          hidden: false,
          icon: <HomeOutlined />
        }
      }
    ]
  },
  {
    path: '/404',
    element: <Error />
  }
]
export const asyncRoute = [
  {
    path: '/acl',
    element: <Layout />,
    name: 'Acl'
  }
]
export const anyRoute = {
  path: '/:pathMatch(.*)*',
  element: <Navigate to="/404" />,
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true
  }
}
