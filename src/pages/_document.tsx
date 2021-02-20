import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          <meta
            name='To be deleted'
            content='To be deleted'
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
