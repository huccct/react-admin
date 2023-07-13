import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import { Card, Row, Col, Form, Input, Button } from 'antd'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import backgroundImage from '@/assets/images/background.jpg'
import Identify from '@/components/VerifyCode'
const index: React.FC = observer(() => {
  const [identifyCode, setIdentifyCode] = useState('1234')
  let identifyCodes = '1234567890abcdefjhijklinopqrsduvwxyz'

  // 重置验证码
  const refreshCode = () => {
    let newIdentifyCode = makeCode(4)
    setIdentifyCode(newIdentifyCode)
  }

  const makeCode = (l: number) => {
    let newIdentifyCode = ''
    for (let i = 0; i < l; i++) {
      newIdentifyCode += identifyCodes[randomNum(0, identifyCodes.length)]
    }
    return newIdentifyCode
  }

  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Row>
        <Col span={12} xs={0}></Col>
        <Col span={12} xs={24}>
          <Card
            bordered={false}
            style={{ width: 450 }}
            className="relative top-25vh left-58vw p-10"
          >
            <h1 className="bg-gradient-to-r from-blue to-rgb-35-60-70 bg-clip-text text-transparent text-10 text-center font-bold mb-10 mt--10">
              React-Admin
            </h1>
            <Form>
              <Form.Item name="username">
                <Input
                  size="large"
                  placeholder="Username"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item name="password">
                <Input
                  size="large"
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  size="large"
                  placeholder="VerifyCode"
                  prefix={<InfoCircleOutlined />}
                  suffix={
                    <Identify
                      identifyCode={identifyCode}
                      onClick={refreshCode}
                    />
                  }
                  className="pt-0 pb-0 pr-0"
                />
              </Form.Item>
              <Form.Item>
                <Button className="w-full" type="primary">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
})

export default index
