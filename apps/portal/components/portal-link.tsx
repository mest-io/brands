import React from 'react'
import { Box, Link } from '@mest-fe/ui'

export const PortalLink: React.FC<unknown> = () => {
  return (
    <Box
      css={{
        position: 'fixed',
        bottom: '15px',
        right: '30px',
        '@xs': {
          position: 'absolute',
        },
      }}>
      <Link
        href="https://mest.io"
        blockInHover
        underline={false}
        css={{
          fontSize: '14px',
        }}>
        Official Website
      </Link>
    </Box>
  )
}
