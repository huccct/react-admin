import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Popover,
  Dropdown,
  Space,
  Form,
  ColorPicker,
  Switch
} from 'antd'
import useStore from '@/stores'
import type { MenuProps } from 'antd'
import {
  DownOutlined,
  FrownOutlined,
  FullscreenOutlined,
  MehOutlined,
  ReloadOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Color } from 'antd/es/color-picker'
const text = '主题设置'

const index: React.FC = observer(() => {
  const navigate = useNavigate()
  const logout = async () => {
    await userStore.userLogout()
    navigate('/login')
  }
  let { userStore, settingStore } = useStore()
  const [dark, setDark] = useState(false)
  // updateRefsh
  const updateRefsh = () => {
    settingStore.refsh = !settingStore.refsh
  }

  // fullScreen
  const fullScreen = () => {
    let full = document.fullscreenElement
    if (!full) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const presets = [
    {
      label: 'Recommended',
      colors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }
  ]

  // setColor
  const changeColor = (color: any) => {
    settingStore.colorPrimary = color.toHexString()
  }

  // changeDark
  const changeDark = () => {
    settingStore.dark = !settingStore.dark
    setDark(!dark)
  }

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

  const content = (
    <div>
      <Form>
        <Form.Item label={'主题颜色'}>
          <ColorPicker
            value={settingStore.colorPrimary}
            size="small"
            onChange={changeColor}
            presets={presets}
          />
        </Form.Item>
        <Form.Item label={'暗黑颜色'}>
          <Switch
            checked={dark}
            defaultChecked
            size="small"
            checkedChildren={<MehOutlined />}
            unCheckedChildren={<FrownOutlined />}
            onChange={changeDark}
          />
        </Form.Item>
      </Form>
    </div>
  )

  return (
    <div className="flex items-center justify-around ">
      <Button
        size={'small'}
        shape="circle"
        icon={<ReloadOutlined />}
        onClick={updateRefsh}
      />
      <Button
        size={'small'}
        shape="circle"
        className="ml-10px"
        icon={<FullscreenOutlined onClick={fullScreen} />}
      />
      <Popover
        placement="bottom"
        title={text}
        className="ml-10px"
        content={content}
      >
        <Button size={'small'} shape="circle" icon={<SettingOutlined />} />
      </Popover>
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
