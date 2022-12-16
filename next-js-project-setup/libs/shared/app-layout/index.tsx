import { Layout } from 'antd'
const { Content } = Layout

import React, { ReactNode, useEffect, useState } from 'react'
import NavBar from '@components/navbar'
import { getItemFromLocalStorage, PROFILE_KEY } from '@libs/storage'
import Login from '@components/authComponents/login'

export default function AppLayout({ children }: { children: ReactNode }) {
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    const profile = getItemFromLocalStorage(PROFILE_KEY)
    profile && setUserProfile({ ...profile })
  }, [])

  return (
    <div>
      <Layout>
        <NavBar />
        {Object.keys(userProfile)?.length ? (
          <Content style={{ minHeight: '90vh', padding: 30 }}>
            {children}
          </Content>
        ) : (
          <Login />
        )}
      </Layout>
    </div>
  )
}
