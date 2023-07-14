import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Layout, Menu, Button, theme } from 'antd'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import Logo from './logo'
import type { MenuProps } from 'antd'
import TabBar from './tabbar'
const { Header, Sider, Content } = Layout
const index: React.FC = observer(() => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  type MenuItem = Required<MenuProps>['items'][number]

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem
  }
  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8')
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),

      getItem('Submenu', 'sub3', null, [
        getItem('Option 11', '11'),
        getItem('Option 12', '12')
      ])
    ])
  ]
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-14 m-3">
          <Logo iscollapse={collapsed} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
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
