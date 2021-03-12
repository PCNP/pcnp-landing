import React, {useEffect} from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../styles/global.sass'

import { Footer } from '../components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { ArrowToTop } from '../components/ArrowToTop/ArrowToTop'


export const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter()

  const lang = pathname.startsWith('/en') ? 'en' : 'ru'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

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
