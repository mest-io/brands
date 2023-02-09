import Document, { Html, Head, Main, NextScript } from 'next/document'
import { HydrationStyle } from '@mest-fe/ui'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <HydrationStyle />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
