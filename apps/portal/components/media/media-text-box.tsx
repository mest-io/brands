import React from 'react'
import { Box, BoxProps } from '@mest-fe/ui'

export const MediaTextBox: React.FC<React.PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      css={{
        padding: '0 56px',

        '@xs': {
          padding: '0 25px',
        },
        '@sm': {
          padding: '0 45px',
        },
      }}
      {...props}>
      {children}
    </Box>
  )
}
