import * as React from 'react'
import { PropsWithChildren } from 'react'
import { useMestTheme } from '@mest-fe/ui'
import { AppHeader } from '../app-header/app-header'
import { AppContainerSection } from './app-container-section'
import { AppFooter } from '../app-footer/app-footer'


export const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useMestTheme()

  return (
    <>
      <div className="container">
        <AppContainerSection>
          <AppHeader />
        </AppContainerSection>
        {children}
        <AppFooter />
      </div>
      <style jsx>{`
        .container {
          position: relative;
          width: var(--mest-portal-page-width);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          border-left: 1px solid ${colors.border.value};
          border-right: 1px solid ${colors.border.value};
        }

        @media (max-width: 640px) {
          .container {
            border-left: none;
            border-right: none;
            width: auto;
          }

          .container > *:last-child::after {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
