import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Menu } from 'antd'
import './style/index.scss'
import { Link, useLocation } from 'react-router-dom'
const { SubMenu } = Menu
interface Iprops {
  menuList: any[]
}

const SideMenu = observer(({ menuList }: Iprops) => {
  const renderMenu = (menuList: any) => {
    return menuList.map((item: any) => {
      if (!item.children && !item.meta.hidden) {
        return (
          <Menu.Item icon={item.meta.icon} key={item.path}>
            <Link to={item.path}>{item.meta.title}</Link>
          </Menu.Item>
        )
      }

      if (
        item.children &&
        item.children.length === 2 &&
        !item.children[0].meta.hidden
      ) {
        return (
          <Menu.Item
            icon={item.children[0].meta.icon}
            key={item.children[0].path}
          >
            <Link to={item.children[0].path}>
              {item.children[0].meta.title}
            </Link>
          </Menu.Item>
        )
      }

      if (item.children && item.children.length > 1) {
        return (
          <SubMenu
            title={item.meta.title}
            icon={item.meta.icon}
            key={item.path}
          >
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
    })
  }
  const location = useLocation()
  const defaultSelectedKeys = location.pathname
  const [selectedKeys, setSelectedKeys] = useState([''])
  const [openKeys, setOpenKeys] = useState([''])

  useEffect(() => {
    let path = location.pathname

    if (path === '/home') {
      path = '/'
    }
    setSelectedKeys([path])
    if (path.startsWith('/product')) {
      setOpenKeys(['/product'])
    } else if (path.startsWith('/acl')) {
      setOpenKeys(['/acl'])
    }
  }, [location])

  const handleOpenChange = (keys: any) => {
    setOpenKeys(keys)
  }
  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={[defaultSelectedKeys]}
      selectedKeys={selectedKeys}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    >
      {renderMenu(menuList)}
    </Menu>
  )
})

export default SideMenu
