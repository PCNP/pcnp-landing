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
