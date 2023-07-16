import React from 'react'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Layout from '@/layout/index'
import NotFound from '@/pages/404'
import Screen from '@/pages/screen'
import AclUser from '@/pages/acl/user'
import AclRole from '@/pages/acl/role'
import AclPermission from '@/pages/acl/permission'
import ProductTradeMark from '@/pages/product/trademark'
import ProductAttr from '@/pages/product/attr'
import ProductSpu from '@/pages/product/spu'
import ProductSku from '@/pages/product/sku'
import {
  BookOutlined,
  ContactsOutlined,
  FundProjectionScreenOutlined,
  HomeFilled,
  LockOutlined,
  MenuOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Navigate, Route } from 'react-router-dom'

export const constantRoute = [
  {
    path: '/login',
    element: <Login />,
    name: 'login',
    key: '1',
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/',
    element: <Layout />,
    name: 'layout',
    key: '2',
    meta: {
      title: 'layout',
      hidden: false
    },
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
        key: '2-1',
        meta: {
          title: '首页',
          hidden: false,
          icon: <HomeFilled />
        }
      },
      {
        path: 'home',
        element: <Home />,
        key: '2-2',
        meta: {
          title: '首页',
          hidden: true,
          icon: <HomeFilled />
        }
      }
    ]
  },
  {
    path: '/404',
    element: <NotFound />,
    name: '404',
    key: '3',
    meta: {
      title: '404',
      hidden: true
    }
  },
  {
    path: '/screen',
    element: <Screen />,
    name: 'Screen',
    key: '4',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: <FundProjectionScreenOutlined />
    }
  },
  {
    path: '/acl',
    element: <Layout />,
    name: 'Acl',
    key: '5',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: <LockOutlined />
    },
    children: [
      {
        path: '/acl/user',
        element: <AclUser />,
        name: 'User',
        key: '5-1',
        meta: {
          title: '用户管理',
          icon: <UserOutlined />
        }
      },
      {
        path: '/acl/role',
        element: <AclRole />,
        name: 'Role',
        key: '5-2',
        meta: {
          title: '权限管理',
          icon: <ContactsOutlined />
        }
      },
      {
        path: '/acl/permission',
        element: <AclPermission />,
        name: 'Permission',
        key: '5-3',
        meta: {
          title: '菜单管理',
          icon: <MenuOutlined />
        }
      }
    ]
  },
  {
    path: '/product',
    element: <Layout />,
    name: 'Product',
    key: '6',
    meta: {
      title: '商品管理',
      icon: <ShoppingOutlined />,
      hidden: false
    },
    children: [
      {
        path: '/product/trademark',
        element: <ProductTradeMark />,
        name: 'Trademark',
        key: '6-1',
        meta: {
          title: '品牌管理',
          icon: <ShoppingCartOutlined />,
          hidden: false
        }
      },
      {
        path: '/product/attr',
        element: <ProductAttr />,
        name: 'Attr',
        key: '6-2',
        meta: {
          title: '属性管理',
          icon: <BookOutlined />,
          hidden: false
        }
      },
      {
        path: '/product/spu',
        element: <ProductSpu />,
        name: 'Spu',
        key: '6-3',
        meta: {
          title: 'Spu管理',
          icon: <ProjectOutlined />,
          hidden: false
        }
      },
      {
        path: '/product/sku',
        element: <ProductSku />,
        name: 'Sku',
        key: '6-4',
        meta: {
          title: 'Sku管理',
          icon: <ReconciliationOutlined />,
          hidden: false
        }
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
    name: 'Any',
    key: '7',
    meta: {
      title: '任意路由',
      hidden: true
    }
  }
]
