import React from 'react'
import { AppProps } from 'next/app'

import '../styles/global.sass'

import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'


export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
