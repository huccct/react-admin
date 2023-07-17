import React, { Fragment, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Layout, Menu, Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Logo from './logo'
import TabBar from './tabbar'
import SideMenu from './sidemenu'
import Main from './main'
import useStore from '@/stores'
import { Footer } from 'antd/es/layout/layout'
const { Header, Sider, Content } = Layout
const index: React.FC = observer(() => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  let { userStore } = useStore()

  return (
    <Layout style={{ height: '100vh' }}>
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

          <div className="w-90% ml-10px">
            <TabBar />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            minHeight: '280px',
            overflow: 'auto'
          }}
        >
          <Main />
        </Content>
      </Layout>
    </Layout>
  )
})

export default index
