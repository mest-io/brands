import Head from 'next/head'
import React from 'react'
import { Box } from '@mest-fe/ui'

export const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mest Brands - All stories about blockchain</title>
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
          content="Mest is a wallet tracker powered by the community that delivers diverse insights and connects people with blockchains."
        />
        <meta property="og:url" content="https://brands.mest.io" />
        <meta property="og:site_name" content="brands.mest.io" />
        <meta
          property="og:image"
          content="https://og.mest.sh/blog?title=Mest%20Brands&subtitle=Open,%20Composable%20and%20Connectable"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mest_io" />
        <meta name="twitter:title" content="Mest Brands" />

        <meta
          name="twitter:image"
          content="https://og.mest.sh/blog?title=Mest%20Brands&subtitle=Open,%20Composable%20and%20Connectable"
        />
        <meta name="google" content="notranslate" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
        <link rel="dns-prefetch" href="https://brands.mest.io" />
      </Head>
      <>
        <Box>{children}</Box>
      </>
    </>
  )
}
