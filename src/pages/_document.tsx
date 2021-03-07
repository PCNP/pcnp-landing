import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { AnalyticsScripts } from 'src/components/AnalyticsScripts/AnalyticsScripts'
import { FormScripts } from 'src/components/FormScripts/FormScripts'


class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          {
            process.env.NODE_ENV === 'production' && (
              <AnalyticsScripts />
            ) && ( <FormScripts /> )
          }
          <script
            src='https://code.jquery.com/jquery-3.3.1.js'
            integrity='sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60='
            crossOrigin='anonymous'
          />
          <meta
            name='qform-verification'
            content='HREZB96E9DG5'
          />
          <meta
            name='Description'
            content='PCNP - SOFTWARE & APP DEVELOPMENT AGENCY
            Fast. Professional. Unique.'
          />
          <meta
            name='theme-color'
            content='#ваш цвет'
          />
          <meta
            name='msapplication-navbutton-color'
            content='#00152F'
          />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='#00152F'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
