import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

import path from 'node:path'

const root = path.join(__dirname, './')
const entryPath = path.join(root, 'src', 'index.ts')
const tsconfigPath = path.join(root, 'tsconfig.lib.json')
const distPath = path.join(root, '../../', 'dist', 'packages', 'brands')

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const outputName = path.join(distPath, 'index')

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
        targets:[
          distPath
        ]
      }),
      copy({
        targets: convertCopyAssetsToRollupOptions(distPath, [
          {
            glob: 'packages/brands/README.md',
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
      resolve(),
      typescript({
        check: true,
        tsconfig: tsconfigPath,
      }),
      resolve({
        preferBuiltins: true,
        extensions,
      }),
      babel({
        babelHelpers: 'runtime',
        extensions,
        exclude: '**/node_modules/**',
      }),
      commonjs(),
    ],
    input: entryPath,
    output: [
      {
        file: `${outputName}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${outputName}.umd.js`,
        name: `${outputName}`,
        format: 'umd',
        sourcemap: true,
      },
      {
        file: `${outputName}.es.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    plugins: [
      resolve(),
      typescript({
        check: true,
        tsconfig: tsconfigPath,
      }),
      resolve({
        preferBuiltins: true,
        extensions,
      }),
      babel({
        babelHelpers: 'runtime',
        extensions,
        exclude: '**/node_modules/**',
      }),
      commonjs(),
      terser(),
    ],
    input: entryPath,
    output: [
      {
        file: `${outputName}.min.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${outputName}.umd.min.js`,
        name: `${outputName}`,
        format: 'umd',
        sourcemap: true,
      },
      {
        file: `${outputName}.es.min.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
  },
]
