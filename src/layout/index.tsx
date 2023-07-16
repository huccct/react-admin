import React, { Fragment, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Layout, Menu, Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Logo from './logo'
import TabBar from './tabbar'
import SideMenu from './sidemenu'
import useStore from '@/stores'
import { Outlet } from 'react-router-dom'
const { Header, Sider, Content } = Layout
const index: React.FC = observer(() => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  let { userStore } = useStore()

  const { SubMenu } = Menu
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Fragment>
          <Logo iscollapse={collapsed} />
          <Menu mode="inline" theme="dark">
            <SideMenu menuList={userStore.menuRoutes} />
          </Menu>
        </Fragment>
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex"
        >
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64
              }}
            />
          </div>
          <div className="w-90% ml-10px">
            <TabBar />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '80vh',
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
})

export default index
