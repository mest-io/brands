import React from 'react'
import { Grid, Link, Text } from '@mest-fe/ui'

export type ResourceItemProps = {
  url: string
  index: number
}

export const ResourceItem: React.FC<ResourceItemProps> = ({ url, index }) => {
  const filename = url.split('/').pop()

  const download = (url: string, filename: string) => {
    const downloadHref = document.createElement('a')
    downloadHref.href = url
    downloadHref.download = filename
    downloadHref.click()
  }

  return (
    <Grid
      xs={24}
      css={{
        height: 'auto',
        marginBottom: '5px',
        '@xs': {
          width: '200px',
          maxWidth: '80%',
          justifyContent: 'flex-start',
        },
      }}
      justify="center"
      alignItems="center">
      <Link
        underline={false}
        href={url}
        target="_blank"
        css={{
          fontSize: '14px',
          color: '$minors_7',
          fontFamily: '$prism',
          fontWeight: 600,
        }}>
        <Text span css={{ marginRight: '5px', color: '$accents_3' }}>
          0{index}
        </Text>{' '}
        <Text
          span
          css={{
            '&:hover': {
              color: '$accents_6',
              textUnderlinePosition: 'under',
              textDecorationColor: 'inherit',
              textDecorationThickness: '6%',
              textDecorationSkip: 'edges',
              textDecorationSkipInk: 'none',
              textDecorationLine: 'underline',
              textDecorationStyle: 'dotted',
            },
          }}>
          {filename}
        </Text>
      </Link>
    </Grid>
  )
}
