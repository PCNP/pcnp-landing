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
          <link
            rel='stylesheet'
            href='owl-carousel/owl.theme.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
