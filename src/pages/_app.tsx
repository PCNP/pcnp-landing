import React from 'react'
import { AppProps } from 'next/app'

import '../styles/global.sass'
import {Logo} from "../components/Logo/Logo";
import {Nav} from "../components/Nav/Nav";


export const App = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <div className={'header'}>
          <Logo/>
          <Nav/>
        </div>
        <Component {...pageProps} />
      </>
  )
}

export default App
