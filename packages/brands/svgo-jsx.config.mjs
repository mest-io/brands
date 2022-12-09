import fs from 'node:fs'
import path from 'node:path'

export const config = {
  inputDir: './src/svgs',
  outputDir: '/src/components',
  after: ({ targets }) => {
    let result = ''
    for (const { file, componentName } of targets) {
      const tsIgnoreString = '// @ts-ignore\n'
      const fileExtensionWithoutJs = path.basename(file, '.js')
      result += `${tsIgnoreString}export { ${componentName} } from './components/${fileExtensionWithoutJs}'\n`
    }
    fs.writeFileSync('packages/brands/src/index.ts', result)
  },
}
