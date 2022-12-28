/// <reference types="styled-jsx" />
import './styles.css'
import { CssBaseline, darkTheme, MestProvider } from '@mest-fe/ui'
import { RootLayout } from '../components/layouts/root-layout'
import { MestBaseline } from '../components/layouts/mest-baseline'

export const BrandsApp = ({ Component, pageProps }) => (
  <MestProvider
    followMestColorScheme
    theme={darkTheme}
    colorScheme={{ initial: 'dark', serverSideInitial: 'dark' }}>
    <CssBaseline />
    <MestBaseline>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </MestBaseline>
  </MestProvider>
)

export default BrandsApp
