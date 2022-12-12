import { Box, Grid, Image, ImageProps, Text } from '@mest-fe/ui'
import * as React from 'react'
import { LogoCardHorizontalLight } from '@mest-fe/brands'
import { ResourcesDownloader } from '../components/resources/resources-downloader'
import { AppContainer } from '../components/layouts/app/app-container/app-container'
import { AppContainerSection } from '../components/layouts/app/app-container/app-container-section'
import { Banner } from '../components/kits/banner'
import { MediaText } from '../components/media/media-text'
import { MediaTextBox } from '../components/media/media-text-box'

export const CardTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text
      h2
      css={{
        color: '$accents_9',
        fontSize: '3.5rem',
        lineHeight: '1.5',
        fontWeight: '700',

        '@xs': {
          fontSize: '2.25rem',
          fontWeight: '600',
        },
        '@sm': {
          fontSize: '2.5rem',
          fontWeight: '600',
        },
        '@md': {
          fontSize: '3rem',
          fontWeight: '600',
        },
      }}>
      {children}
    </Text>
  )
}

export const CardText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text
      css={{
        color: '$accents_8',
        fontSize: '1.5rem',
        lineHeight: '1.5',

        '@xs': {
          fontSize: '1rem',
        },
        '@sm': {
          fontSize: '1.1rem',
        },
        '@md': {
          fontSize: '1.25rem',
        },
      }}>
      {children}
    </Text>
  )
}

export const CardTextBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      css={{
        padding: '100px 100px',

        '@xs': {
          padding: '17px 20px 25px',
        },
        '@sm': {
          padding: '80px 10px 20px 40px',
        },
        '@md': {
          padding: '80px 15px 20px 40px',
        },
      }}>
      {children}
    </Box>
  )
}

export const CardImage: React.FC<ImageProps> = ({ src }) => {
  return (
    <Grid
      css={{
        '@xs': {
          height: 'auto',
          padding: '40px 0 10px',
        },
      }}>
      <Image
        height="340px"
        width="340px"
        src={src}
        alt="Mest features"
        draggable={false}
        css={{
          userSelect: 'none',

          '@xs': {
            maxWidth: '75%',
            height: 'auto !important',
            img: {
              height: 'auto',
            },
          },
          '@sm': {
            maxWidth: '70%',
          },
          '@md': {
            maxWidth: '80%',
          },
        }}
      />
    </Grid>
  )
}

export const Index = ({ pageProps }) => {
  return (
    <>
      <AppContainerSection>
        <Banner
          label={'Media Kit'}
          title={'Brand Values'}
          subtitle={'Open, Composable and Connectable'}
        />
      </AppContainerSection>
      <AppContainerSection>
        <Grid
          container
          css={{
            padding: '65px 0',
            flexDirection: 'row',
            '@sm': {
              padding: '35px 0',
            },
            '@xs': {
              padding: '35px 0',
              flexDirection: 'column-reverse',
            },
          }}>
          <Grid xs={24} sm={12} md={10} direction="column">
            <MediaTextBox>
              <Text
                h2
                css={{
                  fontWeight: 'bold',
                  fontSize: '3.5rem',
                  lineHeight: 1.25,
                  color: '$accents_9',

                  '@md': {
                    fontSize: '3rem',
                  },
                  '@sm': {
                    fontSize: '2.5rem',
                  },
                  '@xs': {
                    fontSize: '2rem',
                  },
                }}>
                {'Media Kit'}
              </Text>
              <MediaText>
                {
                  'Mest will provide you with best practice examples for the media kit and various types of logos.'
                }
              </MediaText>
            </MediaTextBox>
          </Grid>
          <Grid xs={24} sm={12} md={14}>
            <Image
              draggable={false}
              width="695px"
              height="248px"
              alt="Large logo variants"
              src="/assets/logo-variants-media-large.png"
              css={{ maxWidth: '95%', userSelect: 'none' }}
            />
          </Grid>
        </Grid>
      </AppContainerSection>
      <AppContainerSection>
        <ResourcesDownloader />
      </AppContainerSection>
    </>
  )
}

export default Index
