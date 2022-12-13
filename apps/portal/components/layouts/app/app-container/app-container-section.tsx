import * as React from 'react'
import { Box, BoxProps, mixins } from '@mest-fe/ui'

export const AppContainerSection: React.FC<BoxProps> = ({ css, children }) => {
  return (
    <Box
      as="section"
      css={mixins.css(
        {
          position: 'relative',

          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100vw',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            height: '1px',
            backgroundColor: '$border',
          },
        },
        css,
      )}>
      {children}
    </Box>
  )
}
