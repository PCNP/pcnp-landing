import React, { useState } from 'react'
import { AppProps } from 'next/app'

import '../styles/global.sass'
import cn from 'classnames'

import { Logo } from '../components/Logo/Logo'
import { Nav } from '../components/Nav/Nav'
import { Footer } from '../components/Footer/Footer'
import { Button } from '../components/Button/Button'
import { MobileNav } from '../components/mobile/MobileNav/MobileNav'


export const App = ({ Component, pageProps }: AppProps) => {
  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
    setScroll(window.scrollY)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <header
        className={
          cn(
            'header',
            scroll > 0 ? 'headerScroll' : ''
          )
        }
      >
        <Logo />
        <Nav />
        <MobileNav />
        {
          scroll > 0 ? <Button href='/'>Начать проект</Button> : ''
        }
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
