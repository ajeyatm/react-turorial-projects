import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // const { Component, pageProps } = props
  // const Component = props.Component
  // const pageProps = props.pageProps

  return <Component {...pageProps} />
}

export default MyApp
