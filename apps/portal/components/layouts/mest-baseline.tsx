import * as React from 'react'

export const MestBaseline: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <style global jsx>{`
        #__next {
          height: 100%;
        }

        :root {
          height: 100%;
          box-sizing: border-box;
          --mest-portal-page-width: clamp(320px, 90vw, 1378px);
          --mest-portal-header-height-pc: 80px;
          --mest-portal-header-height-mobile: 64px;
        }

        :global(svg) {
          vertical-align: middle;
        }

        @media (max-width: 640px) {
          body {
            height: 100%;
          }
        }
      `}</style>
    </>
  )
}
