import React from 'react'
import { ResourceItem } from './resource-item'
import { Box, Grid, Text } from '@mest-fe/ui'

const RESOURCES = {
  ICONS: [
    'resources/png_logo/Icon_Dark.png',
    'resources/png_logo/Icon_Light.png',
    'resources/png_logo/Icon_Rounded.png',
    'resources/svg_logo/Icon_Dark.svg',
    'resources/svg_logo/Icon_Light.svg',
    'resources/svg_logo/Icon_Rounded.svg',
  ],
  LOGOS: [
    'resources/svg_logo/Logo_Dark.svg',
    'resources/svg_logo/Logo_Light.svg',
    'resources/png_logo/Logo_Dark.png',
    'resources/png_logo/Logo_Light.png',
  ],
  STACKS: [
    'resources/svg_logo/Stack_Dark.svg',
    'resources/svg_logo/Stack_Light.svg',
    'resources/png_logo/Stack_Dark.png',
    'resources/png_logo/Stack_Light.png',
  ],
}

export const Resources: React.FC = () => {
  const group = Object.keys(RESOURCES)

  return (
    <Grid container>
      {group.map(groupName => (
        <Grid key={groupName} xs={24} sm={8} direction="column" alignItems="center">
          <Box
            css={{
              '@xs': {
                width: '200px',
                maxWidth: '80%',
                justifyContent: 'flex-start',
              },
            }}>
            <Text
              i
              css={{
                fontSize: '12px',
                fontWeight: 800,
                fontFamily: '$prism',
                color: '$accents_3',
              }}>
              {groupName}
            </Text>
          </Box>
          <Grid
            direction="column"
            alignItems="center"
            css={{
              '@xs': {
                marginBottom: '50px',
                width: '100%',
                display: 'flex',
              },
            }}>
            {RESOURCES[groupName].map((url, index) => (
              <ResourceItem key={index} url={url} index={index} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
