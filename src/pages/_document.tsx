import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { AnalyticsScripts } from 'src/components/AnalyticsScripts/AnalyticsScripts'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {
            process.env.NODE_ENV === 'production' && (
              <AnalyticsScripts />
            )
          }
          <script
            async
            src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'
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
