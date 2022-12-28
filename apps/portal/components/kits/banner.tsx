import React from 'react'
import { Box, Text } from '@mest-fe/ui'

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Text
    h2
    css={{
      color: '#fff',
      fontSize: '3.5rem',
      lineHeight: 1.25,
      padding: '0 80px',

      '@md': {
        fontSize: '3rem',
        padding: '0 60px',
      },
      '@sm': {
        fontSize: '2.5rem',
        padding: '0 40px',
      },
      '@xs': {
        fontSize: '2rem',
        padding: '0 20px',
      },
    }}>
    {children}
  </Text>
)

export type BannerProps = {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  label?: string
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle, label }) => {
  return (
    <Box
      css={{
        width: '100%',
        height: '400px',
        backgroundColor: '#323232',
        padding: '33px 0',
        position: 'relative',

        '@xs': {
          height: '290px',
          padding: '22px 0',
        },
        '@sm': {
          height: '330px',
          padding: '25px 0',
        },
        '@md': {
          height: '365px',
          padding: '29px 0',
        },
      }}>
      <Text
        h1
        css={{
          fontWeight: '500',
          fontSize: '1.5rem',
          lineHeight: 1.5,
          color: '#646464',
          textTransform: 'uppercase',
          padding: '0 80px',

          '@md': {
            padding: '0 60px',
          },
          '@sm': {
            padding: '0 40px',
            fontSize: '1.25rem',
          },
          '@xs': {
            padding: '0 20px',
            fontSize: '1rem',
          },
        }}>
        {label}
      </Text>
      <Box
        css={{
          position: 'absolute',
          bottom: '50px',
          left: 0,
          right: 0,
          width: '100%',

          '@xs': {
            bottom: '20px',
          },
          '@sm': {
            bottom: '30px',
          },
          '@md': {
            bottom: '40px',
          },
        }}>
        <Title>{title}</Title>
        {subtitle && <Title>{subtitle}</Title>}
      </Box>
    </Box>
  )
}
