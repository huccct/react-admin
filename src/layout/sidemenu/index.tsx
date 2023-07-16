import React from 'react'
import { observer } from 'mobx-react-lite'
import { Menu } from 'antd'
import './style/index.scss'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu
interface Iprops {
  menuList: any[]
}

const SideMenu = observer(({ menuList }: Iprops) => {
  return (
    <Menu mode="inline" theme="dark" defaultOpenKeys={['2-1']}>
      {menuList.map((item) => {
        if (!item.children && !item.meta.hidden) {
          return (
            <Menu.Item icon={item.meta.icon} key={item.key}>
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
              key={item.children[0].key}
            >
              <Link to={item.children[0].path}>
                {item.children[0].meta.title}
              </Link>
            </Menu.Item>
          )
        }

        if (item.children && item.children.length > 2) {
          return (
            <SubMenu
              title={item.meta.title}
              icon={item.meta.icon}
              key={item.key}
            >
              <SideMenu menuList={item.children}></SideMenu>
            </SubMenu>
          )
        }
      })}
    </Menu>
  )
})

export default SideMenu
