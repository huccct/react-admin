import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Popover, Dropdown, Space } from 'antd'
import useStore from '@/stores'
import type { MenuProps } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const text = '主题设置'

const index: React.FC = observer(() => {
  const navigate = useNavigate()
  const logout = async () => {
    await userStore.userLogout()
    navigate('/login')
  }
  let { userStore } = useStore()
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="#" onClick={logout}>
          退出登录
        </a>
      ),
      key: '0'
    }
  ]

  return (
    <div className="flex items-center justify-around ">
      <Button size={'small'} shape="circle" />
      <Button size={'small'} shape="circle" className="ml-10px" />
      <Popover placement="bottom" title={text}></Popover>

      <img
        src={userStore.avatar}
        alt="avatar"
        className="w-24px h-24px rounded-full mx-10px"
      />

      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="color-black">
            {userStore.username}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
})

export default index
