import * as React from 'react'
import { Button, Text, Link, Grid } from '@mest-fe/ui'
import { useEffect, useState } from 'react'

interface DownloadButtonProps {
  url: string
  download: string
}

interface DownloadLinkProps {
  url: string
}


const DEFAULT_BRANDS_HOST = 'https://brands.mest.io'
const DEFAULT_COPIED_TIMEOUT = 3000

const createFilename = (url: string) => {
  return url.split('/').pop()
}

const createFullUrl = (urlSuffix: string) => {
  const origin = location.origin || DEFAULT_BRANDS_HOST
  return origin + '/' + urlSuffix
}

const downloadFromUrl = (url: string, download: string) => {
  const downloadHref = document.createElement('a')
  const downloadFilename = download
  downloadHref.href = url
  downloadHref.download = downloadFilename
  downloadHref.click()
}

const copyToClipBoard = async (url: string) => {
  const fullUrl = createFullUrl(url)
  return await navigator.clipboard.writeText(fullUrl)
}

const DOWNLOADABLE_RESOURCES = [
  'resources/png_logo/Icon_Dark.png',
  'resources/png_logo/Icon_Light.png',
  'resources/png_logo/Icon_Rounded.png',
  'resources/png_logo/Logo_Dark.png',
  'resources/png_logo/Logo_Light.png',
  'resources/png_logo/Stack_Dark.png',
  'resources/png_logo/Stack_Light.png',
  'resources/svg_logo/Icon_Dark.svg',
  'resources/svg_logo/Icon_Light.svg',
  'resources/svg_logo/Icon_Rounded.svg',
  'resources/svg_logo/Logo_Dark.svg',
  'resources/svg_logo/Logo_Light.svg',
  'resources/svg_logo/Stack_Dark.svg',
  'resources/svg_logo/Stack_Light.svg',
]

const DownloadLink: React.FC<DownloadLinkProps> = props => {
  const downloadFilename = createFilename(props.url)
  return (
    <Text h6>
      <Link
        css={{
          paddingRight: '20px',
        }}
        onClick={() => {
          downloadFromUrl(props.url, downloadFilename)
        }}>
        {downloadFilename}
      </Link>
      <CopyUrlLink url={props.url} />
    </Text>
  )
}

const CopyUrlLink: React.FC<DownloadLinkProps> = props => {
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), DEFAULT_COPIED_TIMEOUT)
    }
  }, [copied])

  return (
    <Button
      scale={0.5}
      onClick={() => {
        copyToClipBoard(props.url)
          .then(() => {
            setCopied(true)
          })
      }}
      color={copied ? 'success' : 'default'}
    >
      {
        copied ? 'Copied' : 'Copy'
      }
    </Button>
  )
}

export const ResourcesDownloader: React.FC = () => {
  return (
    <Grid
      direction='row'
      css={{
        marginLeft: '40px',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      {DOWNLOADABLE_RESOURCES.map((downloadUrl, index) => (
        <Grid
          key={`download-link-${index}`}
          className={'download-section'}
        >
          <DownloadLink url={downloadUrl} />
        </Grid>
      ))}
      <style jsx>{`
        .download-section {
          display: flex;
        }
      `}</style>
    </Grid>
  )
}
