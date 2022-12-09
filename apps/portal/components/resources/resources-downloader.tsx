import * as React from 'react'
import { Button, Grid } from '@mest-fe/ui'
import {
  LogoHorizontalDark,
  LogoHorizontalLight,
  LogoVerticalDark,
  LogoVerticalLight,
} from '@mest-fe/brands'

interface DownloadButtonProps {
  url: string
  download: string
}

const downloadFromUrl = (url: string, download: string) => {
  const downloadHref = document.createElement('a')
  downloadHref.href = url
  downloadHref.download = download
  downloadHref.click()
}
const DownloadButton: React.FC<DownloadButtonProps> = props => {
  return (
    <Button onClick={() => downloadFromUrl(props.url, props.download)}>
      Download
    </Button>
  )
}

export const ResourcesDownloader: React.FC = () => {
  return (
    <>
      <Grid container gap={4} justify={'center'}>
        <Grid xs={12} sm={6}>
          <LogoHorizontalLight
            height={320}
            preserveAspectRatio="xMidYMid meet"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <LogoHorizontalDark
            height={320}
            preserveAspectRatio="xMidYMid meet"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <LogoVerticalLight
            height={320}
            preserveAspectRatio="xMidYMid meet"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <LogoVerticalDark
            height={320}
            preserveAspectRatio="xMidYMid meet"
          />
        </Grid>

        <Grid xs={12} sm={6} justify={'center'}>
          <DownloadButton
            url={'/assets/MestHorizontalLight.png'}
            download={'MestHorizontalLight.png'}
          />
        </Grid>
        <Grid xs={12} sm={6} justify={'center'}>
          <DownloadButton
            url={'/assets/MestHorizontalDark.png'}
            download={'MestHorizontalDark.png'}
          />
        </Grid>
        <Grid xs={12} sm={6} justify={'center'}>
          <DownloadButton
            url={'/assets/MestVerticalLight.png'}
            download={'MestVerticalLight.png'}
          />
        </Grid>
        <Grid xs={12} sm={6} justify={'center'}>
          <DownloadButton
            url={'/assets/MestVerticalDark.png'}
            download={'MestVerticalDark.png'}
          />
        </Grid>
      </Grid>
      <style jsx>{`
        .componentCard:hover {
          background-color: #191919;
        }
      `}</style>
    </>
  )
}
