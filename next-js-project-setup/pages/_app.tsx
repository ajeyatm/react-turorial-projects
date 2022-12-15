import 'antd/dist/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '@libs/shared/app-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
