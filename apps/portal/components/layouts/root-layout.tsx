import Head from 'next/head'
import { AppContainer } from './app/app-container/app-container'

export const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mest Brands</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="author" content="@mest_io" />
        <meta name="description" content="Mest Brands" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mest Brands" />
        <meta
          property="og:description"
          content="Mest makes it simple for you to analyse on-chain data and connect your readers."
        />
        <meta property="og:url" content="https://brands.mest.io" />
        <meta property="og:site_name" content="brands.mest.io" />
        <meta
          property="og:image"
          content="https://mest.io/assets/images/shared_card.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mest_io" />
        <meta name="twitter:title" content="Mest Brands" />

        <meta
          name="twitter:image"
          content="https://mest.io/assets/images/shared_card.png"
        />
        <meta name="google" content="notranslate" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <link rel="dns-prefetch" href="https://brands.mest.io" />
      </Head>
      <>
        <AppContainer>{children}</AppContainer>
      </>
    </>
  )
}
