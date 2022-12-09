import { Box } from '@mest-fe/ui'
import { LogoHorizontalLight } from '@mest-fe/brands'

export const AppHeader = () => {
  return (
    <Box
      as="header"
      css={{
        height: 'var(--mest-portal-header-height-pc)',
        display: 'flex',
        padding: '0 36px 0 40px',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',

        '@xs': {
          height: 'var(--mest-portal-header-height-mobile)',
          padding: '0 10px 0 24px',
        },
        '@sm': {
          padding: '0 24px',
        },
      }}>
      <LogoHorizontalLight
        preserveAspectRatio="xMidYMid meet"
        width="150"
        height="80"
        viewBox={'0 0 1830 463'}
      />
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          position: 'absolute',
          right: '36px',
          top: 0,
          bottom: 0,

          '& > a': {
            marginLeft: '30px',
          },
          '@xs': {
            display: 'none',
          },
          '@sm': {
            right: '24px',
          },
          '@md': {
            right: '30px',
          },
        }}></Box>
    </Box>
  )
}
