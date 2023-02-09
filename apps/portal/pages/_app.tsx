/// <reference types="styled-jsx" />
import { CssBaseline, darkTheme, MestProvider } from '@mest-fe/ui'
import { RootLayout, MestBaseline } from '../components'

export const BrandsApp = ({ Component, pageProps }) => (
  <MestProvider
    theme={darkTheme}
    colorScheme={{ initial: 'dark', serverSideInitial: 'dark' }}>
    <CssBaseline />
    <MestBaseline />
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </MestProvider>
)

export default BrandsApp
