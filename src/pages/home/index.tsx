import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from 'antd'
import useStore from '@/stores'
import { getTime } from '@/utils/time'
import { useLocation, useNavigate } from 'react-router-dom'
import setting from '@/setting'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })

const index = observer(() => {
  // import mobx userStore
  let { userStore } = useStore()
  const location = useLocation()
  const navigate = useNavigate()
  document.title = ` | ${setting.title}`
  let token = userStore.token
  let username = userStore.username
  useEffect(() => {
    const checkAuth = async () => {
      nprogress.start()
      if (token) {
        if (location.pathname === '/login') {
          console.log(11111)

          navigate('/home')
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
    nprogress.done()
  }, [location.pathname])
  return (
    <>
      <Card>
        <div className="flex">
          <img
            src={userStore.avatar}
            alt=""
            className="w-100px h-100px rounded-full"
          />
          <div className="ml-20px mt-15px">
            <h3 className="text-35px mb-30px font-bold">{getTime()}好~</h3>
            <span className="bg-gradient-to-r from-001529 via-001529 to-white bg-clip-text text-transparent text-24px font-bold">
              {userStore.username}
            </span>
            <p className="italic text-gray-400 font-bold">React-Admin</p>
          </div>
        </div>
      </Card>
      <div></div>
    </>
  )
})

export default index
