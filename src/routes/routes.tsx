import React from 'react'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Layout from '@/layout/index'
import Error from '@/pages/404'
import { HomeOutlined } from '@ant-design/icons'
import { Navigate } from 'react-router-dom'

export const constantRoute = [
  {
    key: '1',
    path: '/login',
    element: <Login />,
    label: 'login',
    meta: {
      title: 'login',
      hidden: true
    }
  },
  {
    key: '2',
    path: '/',
    element: <Layout />,
    label: 'layout',
    children: [
      {
        key: '3',
        path: 'home',
        element: <Home />,
        label: '首页',
        icon: <HomeOutlined />,
        meta: {
          hidden: false
        }
      }
    ]
  },
  {
    key: '4',
    path: '/404',
    element: <Error />
  }
]
export const asyncRoute = [
  {
    key: '5',
    path: '/acl',
    element: <Layout />,
    label: 'Acl'
  }
]
export const anyRoute = {
  key: '6',
  path: '/:pathMatch(.*)*',
  element: <Navigate to="/404" />,
  label: 'Any',
  meta: {
    hidden: true
  }
}
