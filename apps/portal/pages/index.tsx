import React from 'react'
import { Box, Grid, Image, ImageProps, Text } from '@mest-fe/ui'
import { Resources, Slogan, PortalLink } from '../components'

export const Index = ({ pageProps }) => {
  return (
    <>
      <Box
        css={{
          width: '80%',
          maxWidth: '800px',
          margin: '0 auto',

          '@xs': {
            paddingBottom: '100px',
          },
        }}>
        <PortalLink />
        <Slogan />
        <Box
          css={{
            width: '110%',
            marginLeft: '-5%',
          }}>
          <Resources />
        </Box>
      </Box>
    </>
  )
}

export default Index
