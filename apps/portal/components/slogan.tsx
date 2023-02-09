import React from 'react'
import { Box, Grid, Text } from '@mest-fe/ui'
import { Black_Ops_One } from '@next/font/google'

const blackOpsOne = Black_Ops_One({ weight: '400', subsets: ['latin'] })

export const Slogan: React.FC<unknown> = () => {
  return (
    <Box
      css={{
        width: '100%',
        marginTop: '210px',
        marginBottom: '145px',
        '@xs': {
          marginTop: '100px',
          marginBottom: '50px',
        },
      }}>
      <Grid direction="column" container className={blackOpsOne.className}>
        <Grid xs={24} alignItems="center">
          <Text
            h1
            css={{
              color: '$accents_8',
              userSelect: 'none',
              width: '100%',
              fontSize: '270px',
              margin: 0,
              textAlign: 'center',
              lineHeight: '270px',
              fontWeight: 400,
              '@xs': {
                fontSize: '70px',
              },
              '-webkit-background-clip': 'text',
              'background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              '-ms-text-fill-color': 'transparent',
              'background-image':
                'linear-gradient(135deg, $accents_1, $accents_8, $accents_4, $accents_0)',
            }}>
            MEST
          </Text>
        </Grid>
        <Grid xs={24} alignItems="center" justify="center">
          <Text
            h2
            css={{
              position: 'relative',
              color: '$accents_0',
              userSelect: 'none',
              width: 'auto',
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: '$prism',
              fontWeight: 400,
              backgroundColor: 'transparent',
              padding: '0 10px',
              zIndex: 1,
              opacity: 0.8,

              '&:before': {
                content: '',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                // background: '#58a',
                background: '$accents_7',
                transform: 'skew(-10deg)',
              },

              '@xs': {
                display: 'none',
              },
            }}>
            Brand Values Open, Composable and Connectable
          </Text>
        </Grid>
      </Grid>
    </Box>
  )
}
