import { Layout } from 'antd'
const { Content } = Layout

import React, { ReactNode } from 'react'
import NavBar from '@components/navbar'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Layout>
        <NavBar />
        <Content style={{ minHeight: '90vh', padding: 30 }}>{children}</Content>
      </Layout>
    </div>
  )
}
