import * as fs from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import polyfillNode from 'rollup-plugin-polyfill-node'

const pkg = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }))

const MAIN = 'main'
const MODULE = 'module'
const BROWSER = 'browser'

const formats = {
  [MAIN]: 'cjs',
  [MODULE]: 'es',
  [BROWSER]: 'iife',
}

const options = {
  [MAIN]: {},
  [MODULE]: {},
  [BROWSER]: { name: pkg.name },
}

const generateOutput = (format) => {
  return {
    file: pkg[format],
    format: formats[format],
    interop: 'auto',
    sourcemap: false,
    exports: 'named',
    extend: true,
    ...options[format],
  }
}

const config = {
  input: 'index.js',
  output: [MAIN, MODULE, BROWSER].filter((output) => !!pkg[output]).map(generateOutput),
  external: {
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  },
  plugins: [
    polyfillNode(),
    resolve(),
    commonjs({
      extensions: ['.ts', '.js'],
      exclude: ['node_modules/**', 'dist/**'],
      transformMixedEsModules: true,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.js'],
    }),
    terser(),
  ],
  watch: {
    include: ['index.ts', 'src/**'],
    clearScreen: false,
  },
  treeshake: true,
}

export default config
