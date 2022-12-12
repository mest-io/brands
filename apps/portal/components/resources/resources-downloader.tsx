import * as React from 'react'
import { Button, Text, Link, Grid } from '@mest-fe/ui'

interface DownloadButtonProps {
  url: string
  download: string
}

interface DownloadLinkProps {
  url: string
}

const createFilename = (url: string) => {
  return url.split('/').pop()
}

const downloadFromUrl = (url: string, download: string) => {
  const downloadHref = document.createElement('a')
  const downloadFilename = download
  downloadHref.href = url
  downloadHref.download = downloadFilename
  downloadHref.click()
}
const DownloadButton: React.FC<DownloadButtonProps> = props => {
  return (
    <Button onClick={() => downloadFromUrl(props.url, props.download)}>
      Download
    </Button>
  )
}

const DOWNLOADABLE_RESOURCES = [
  'resources/Mest-Black.png',
  'resources/Mest-Black.svg',
  'resources/Mest-Stack-Black.png',
  'resources/Mest-Stack-Black.svg',
  'resources/Mest-Stack-White.png',
  'resources/Mest-Stack-White.svg',
  'resources/Mest-White.png',
  'resources/Mest-White.svg',
  'resources/Mest-app-icon.png',
  'resources/icon-rounded/Mest-icon-rounded.png',
  'resources/icon-rounded/Mest-icon-rounded.svg',
  'resources/icon-square/Mest-icon-square.png',
  'resources/icon-square/Mest-icon-square.svg',
]

const DownloadLink: React.FC<DownloadLinkProps> = props => {
  const downloadFilename = createFilename(props.url)
  return (
    <Text h6>
      <Link
        css={{
          display: 'block',
        }}
        onClick={() => {
          downloadFromUrl(props.url, downloadFilename)
        }}>
        {downloadFilename}
      </Link>
    </Text>
  )
}

export const ResourcesDownloader: React.FC = () => {
  return (
    <Grid
      css={{
        marginLeft: '40px',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      {DOWNLOADABLE_RESOURCES.map(downloadUrl => (
        <DownloadLink url={downloadUrl} />
      ))}
    </Grid>
  )
}
