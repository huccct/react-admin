import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Layout, Menu, Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Logo from './logo'
import type { MenuProps } from 'antd'
import TabBar from './tabbar'
import useStore from '@/stores'
const { Header, Sider, Content } = Layout
const index: React.FC = observer(() => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  type MenuItem = Required<MenuProps>['items'][number]

  let { userStore } = useStore()
  const items: MenuItem[] = userStore.menuRoutes
  console.log(items)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-14 m-3">
          <Logo iscollapse={collapsed} />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
        />
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
          Content
        </Content>
      </Layout>
    </Layout>
  )
})

export default index
