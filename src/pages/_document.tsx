import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { AnalyticsScripts } from 'src/components/AnalyticsScripts/AnalyticsScripts'
import { FormScripts } from 'src/components/FormScripts/FormScripts'


class MyDocument extends Document {
  render() {
    return (
      <Html>
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
          <script
            src='https://code.jquery.com/jquery-3.3.1.min.js'
            integrity='sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT'
            crossOrigin='anonymous'
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
