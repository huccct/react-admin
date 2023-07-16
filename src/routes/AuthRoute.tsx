import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import nprogress from 'nprogress'
import setting from '@/setting'
import useStore from '@/stores'

const AuthRoute: React.FC = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  let { userStore } = useStore()
  document.title = ` | ${setting.title}`
  let token = userStore.token
  let username = userStore.username
  useEffect(() => {
    nprogress.start()
    const checkAuth = async () => {
      if (token) {
        if (location.pathname === '/login') {
          navigate('/')
        } else {
          if (!username) {
            try {
              await userStore.userInfo()
              navigate(location.pathname)
            } catch (error) {
              await userStore.userLogout()
              navigate('/login')
            }
          }
        }
      } else {
        if (location.pathname !== '/login') {
          navigate('/login')
        }
      }
    }
    checkAuth()
  }, [location.pathname])
  return <></>
})

export default AuthRoute
