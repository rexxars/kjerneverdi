import React from 'react'
import '../styles/globals.css'

function App({
  Component,
  pageProps,
}: {
  Component: React.ElementType
  pageProps: React.PropsWithChildren<any>
}) {
  return <Component {...pageProps} />
}

export default App
