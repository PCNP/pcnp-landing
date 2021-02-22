import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { AnalyticsScripts } from 'src/components/AnalyticsScripts/AnalyticsScripts'


class MyDocument extends Document {

  render() {
    return (
      <Html lang='ru'>
        <Head>
          {
            process.env.NODE_ENV === 'production' && (
              <AnalyticsScripts />
            )
          }
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
