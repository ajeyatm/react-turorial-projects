import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { setItemToLocalStorage, PROFILE_KEY } from '@libs/storage'
import { useRouter } from 'next/router'

const Login: React.FC = () => {
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage()

  const onFinish = async (values: any) => {
    try {
      const res = await fetch('/api/1.0/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const { success, profile, message } = await res.json()
      if (success) {
        setItemToLocalStorage(PROFILE_KEY, profile)
        messageApi.open({
          type: 'success',
          content: message,
        })
        router.replace('/')
      } else {
        messageApi.open({
          type: 'error',
          content: message,
        })
      }
    } catch (error) {
      console.log('error')

      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      })
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      {contextHolder}
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
