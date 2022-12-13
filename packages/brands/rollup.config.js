import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import path from 'node:path'
import fs from 'node:fs'

const root = path.join(__dirname, './')
const entryPath = path.join(root, 'src', 'index.ts')
const tsconfigPath = path.join(root, 'tsconfig.lib.json')
const distPath = path.join(root, '../../', 'dist', 'packages', 'brands')
const componentsPath = path.join(root, 'src', 'components')

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}
const external = [
  'react',
  'react-dom',
  'classname',
  'react-is',
  'core-js',
  'object-assign',
  '**/node_modules/**',
]
const extensions = ['.js', '.jsx', '.ts', '.tsx']

const babelOptions = {
  babelHelpers: 'runtime',
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
  extensions: extensions,
  exclude: '**/node_modules/**',
}

const commonPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    check: true,
    tsconfig: tsconfigPath,
  }),
  babel(babelOptions),
]

const convertCopyAssetsToRollupOptions = (outputPath, assets) => {
  return assets
    ? assets.map(a => ({
        src: path.join(a.input, a.glob).replace(/\\/g, '/'),
        dest: path.join(outputPath, a.output).replace(/\\/g, '/'),
      }))
    : undefined
}

export default [
  {
    plugins: [
      del({
        targets: [distPath],
      }),
      copy({
        targets: convertCopyAssetsToRollupOptions(distPath, [
          {
            glob: 'packages/brands/README.md',
            input: '.',
            output: '.',
          },
          {
            glob: 'packages/brands/LICENSE',
            input: '.',
            output: '.',
          },
          {
            glob: 'packages/brands/package.json',
            input: '.',
            output: '.',
          },
          {
            glob: 'packages/brands/src/svgs/*.svg',
            input: '.',
            output: './svgs/',
          },
        ]),
      }),
      ...commonPlugins,
    ],
    input: entryPath,
    output: [
      {
        file: `${path.join(distPath, 'cjs', 'index.js')}`,
        format: 'cjs',
        sourcemap: true,
        globals,
      },
      {
        file: `${path.join(distPath, 'umd', 'index.js')}`,
        name: 'brands',
        format: 'umd',
        sourcemap: true,
        globals,
      },
      {
        file: `${path.join(distPath, 'esm', 'index.js')}`,
        format: 'esm',
        sourcemap: true,
        globals,
      },
    ],
    external,
  },
  {
    plugins: [...commonPlugins, terser()],
    input: entryPath,
    output: [
      {
        file: `${path.join(distPath, 'cjs', 'index.min.js')}`,
        format: 'cjs',
        sourcemap: true,
        globals,
      },
      {
        file: `${path.join(distPath, 'umd', 'index.min.js')}`,
        name: 'brands',
        format: 'umd',
        sourcemap: true,
        globals,
      },
      {
        file: `${path.join(distPath, 'esm', 'index.min.js')}`,
        format: 'esm',
        sourcemap: true,
        globals,
      },
    ],
    external,
  },
  // build for each component
  ...fs.readdirSync(componentsPath).map(componentFilePath => {
    const filePath = path.join(root, 'src', 'components', componentFilePath)
    const componentName = path.basename(componentFilePath, '.tsx')
    return {
      plugins: [...commonPlugins],
      input: filePath,
      output: [
        {
          file: `${path.join(distPath, 'esm', componentName)}.js`,
          format: 'esm',
          globals,
        },
      ],
      external,
    }
  }),
]
