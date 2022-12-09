import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'

function BrandsApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mest Brands</title>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <meta charSet="utf-8" />
        <title>Mest Brands</title>
        <base href='/' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' href='favicon.png' />
        <meta property="og:site_name" content="brands.mest.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="google" content="notranslate" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <link rel="dns-prefetch" href="https://brands.mest.io" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default BrandsApp
