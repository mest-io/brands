import { mestStitches } from '@mest-fe/ui'

const style = mestStitches.globalCss({
  'html, body': {
    backgroundColor: '$minors_0',
    color: '$minors_9',
  },
})

export const MestBaseline = () => {
  style()
  return null
}
