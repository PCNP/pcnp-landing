import React from 'react'
import { AppProps } from 'next/app'

import '../styles/global.sass'


import { Footer } from '../components/Footer/Footer'
import Header from 'src/components/Header/Header'


export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header
        nav={pageProps.nav}
        buttonText={pageProps.buttonText}
      />
      <Component {...pageProps} />
      <Footer nav={pageProps.nav} />
    </>
  )
}

export default App
