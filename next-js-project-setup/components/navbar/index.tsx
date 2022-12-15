import React from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import { HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
const { Header } = Layout

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'About',
    key: 'about',
    icon: <UserOutlined />,
  },
  {
    label: 'Contact',
    key: 'about',
    icon: <PhoneOutlined />,
  },
]

const NavBar = () => {
  return (
    <Header style={{ backgroundColor: 'white' }}>
      <Row>
        <Col span={4}>
          <div className='logo' />
        </Col>
        <Col span={20}>
          <Menu mode='horizontal' items={items} selectedKeys={['home']} />
        </Col>
      </Row>
    </Header>
  )
}

export default NavBar
