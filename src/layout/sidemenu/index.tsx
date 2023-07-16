import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import { Menu } from 'antd'
import { nanoid } from 'nanoid'
import './style/index.scss'
const { SubMenu } = Menu
interface Iprops {
  menuList: []
}

const SideMenu = observer(({ menuList }: Iprops) => {
  return (
    <Fragment>
      {menuList.map((item: any, index) => {
        console.log(item.meta.title + '---' + item.key)
        return (
          <Fragment key={index}>
            {!item.children && (
              <Fragment>
                {!item.meta.hidden && (
                  <Menu.Item icon={item.meta.icon} key={item.key}>
                    {item.meta.title}
                  </Menu.Item>
                )}
              </Fragment>
            )}
            {item.children && item.children.length === 2 && (
              <Fragment>
                {!item.children[0].meta.hidden && (
                  <Menu.Item
                    icon={item.children[0].meta.icon}
                    key={item.children[0].key}
                  >
                    {item.children[0].meta.title}
                  </Menu.Item>
                )}
              </Fragment>
            )}
            {item.children && item.children.length > 2 && (
              <SubMenu
                title={item.meta.title}
                icon={item.meta.icon}
                key={item.key}
              >
                <SideMenu menuList={item.children}></SideMenu>
              </SubMenu>
            )}
          </Fragment>
        )
      })}
    </Fragment>
  )
})

export default SideMenu
