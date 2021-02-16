import React from 'react'
import { AppProps } from 'next/app'

import '../styles/global.sass'
import { Logo } from '../components/Logo/Logo'
import { Nav } from '../components/Nav/Nav'
import { Footer } from '../components/Footer/Footer'


export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <header className='header'>
        <Logo />
        <Nav />
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
