import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'

function BrandsApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portal!</title>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default BrandsApp
