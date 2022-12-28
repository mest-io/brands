import React from 'react'
import { Text, TextProps, mixins } from '@mest-fe/ui'

export const MediaText: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Text
      css={mixins.css(
        {
          fontSize: '1.5rem',
          color: '$accents_7',
          lineHeight: '1.5',

          '@xs': {
            fontSize: '0.875rem',
          },
          '@sm': {
            fontSize: '1.25rem',
          },
        },
        css,
      )}
      {...props}>
      {children}
    </Text>
  )
}
