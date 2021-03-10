import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.sass'

import { Footer } from '../components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { ArrowToTop } from '../components/ArrowToTop/ArrowToTop'


export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>PCNP - студия разработки сайтов</title>
      </Head>
      <Header
        nav={pageProps.nav}
        buttonText={pageProps.buttonText}
      />
      <Component {...pageProps} />
      <Footer nav={pageProps.nav} />
      <ArrowToTop />
    </>
  )
}

export default App
