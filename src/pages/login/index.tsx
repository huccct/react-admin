import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import { Card, Row, Col, Form, Input, Button, notification } from 'antd'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import backgroundImage from '@/assets/images/background.jpg'
import Identify from '@/components/VerifyCode'
import useStore from '@/stores'
import { getTime } from '@/utils/time'
import { redirect, useNavigate } from 'react-router-dom'

const index: React.FC = observer(() => {
  // use navigate
  const navigate = useNavigate()
  // identifyCode define
  const [identifyCode, setIdentifyCode] = useState('1234')
  // set form data
  const [form] = Form.useForm()
  // init Form Values
  const initialValues = {
    username: 'admin',
    password: 'atguigu123',
    verifyCode: '1234'
  }
  // loading value
  const [loading, setLoading] = useState(false)

  // import mobx userStore
  let { userStore } = useStore()

  let identifyCodes = '1234567890abcdefjhijklinopqrsduvwxyz'

  // reset verifyCode
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

  // update form values
  const handleUpdateFormValue = (type: string) => {
    form.setFieldsValue({
      type: form.getFieldValue(type)
    })
  }

  // verify login form
  const validatorUsername = (rule: any, value: any) => {
    return new Promise<void>((resolve, reject) => {
      if (!value) {
        reject('请输入账号')
      } else {
        resolve()
      }
    })
  }

  const validatorPassword = (rule: any, value: any) => {
    return new Promise<void>((resolve, reject) => {
      if (!value) {
        reject('请输入密码')
      } else if (value.length < 6 || value.length > 16) {
        reject('密码应为6~16位的任意组合')
      } else {
        resolve()
      }
    })
  }

  const validatorVerifyCode = (rule: any, value: any) => {
    return new Promise<void>((resolve, reject) => {
      if (!value) {
        reject('请输入验证码')
      } else if (value.length < 4) {
        reject('请输入正确的验证码')
      } else if (identifyCode !== value) {
        reject('请输入正确的验证码')
      } else {
        resolve()
      }
    })
  }

  // login
  const login = async () => {
    // TODO: login module
    await form.validateFields()
    setLoading(true)

    try {
      await userStore.userLogin(form.getFieldsValue())
      navigate('/')
      notification.success({
        message: '登录成功',
        description: `Hi, ${getTime()}好`
      })
      await userStore.userInfo()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      notification.error({
        message: (err as Error).message
      })
    }
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
            style={{ width: 420 }}
            className="relative top-25vh left-58vw p-10"
          >
            <h1 className="bg-gradient-to-r from-blue to-rgb-35-60-70 bg-clip-text text-transparent text-10 text-center font-bold mb-10 mt--10">
              React-Admin
            </h1>
            <Form initialValues={initialValues} form={form}>
              <Form.Item
                name="username"
                rules={[{ validator: validatorUsername }]}
              >
                <Input
                  size="large"
                  placeholder="Username"
                  prefix={<UserOutlined />}
                  allowClear
                  onChange={() => handleUpdateFormValue('username')}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ validator: validatorPassword }]}
              >
                <Input.Password
                  size="large"
                  placeholder="Password"
                  prefix={<LockOutlined />}
                  allowClear
                  type="password"
                  onChange={() => handleUpdateFormValue('password')}
                />
              </Form.Item>
              <Form.Item
                name="verifyCode"
                rules={[{ validator: validatorVerifyCode }]}
              >
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
                  maxLength={4}
                  onChange={() => handleUpdateFormValue('verifyCode')}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  className="w-full"
                  type="primary"
                  onClick={login}
                  loading={loading}
                >
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
