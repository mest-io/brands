import * as React from 'react'

export const AppFooter: React.FC = () => {
  return (
    <footer>
      <style jsx>{`
        footer {
          height: var(--mest-portal-header-height-pc);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
        }

        .actions span {
          width: 10px;
          display: inline-block;
        }

        @media (max-width: 640px) {
          footer {
            display: none;
          }
        }
      `}</style>
    </footer>
  )
}
