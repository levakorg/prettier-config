const babel = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')
const pkg = require('./package.json')

const MAIN = 'main'
const MODULE = 'module'

const formats = {
  [MAIN]: 'cjs',
  [MODULE]: 'esm'
}

const getOutpt = (output) => ({
  file: pkg[output],
  format: formats[output],
  interop: 'auto',
  exports: 'named',
  sourcemap: true
})

const config = {
  input: 'index.js',
  output: [MAIN, MODULE].filter((output) => output).map(getOutpt),
  external: Object.keys(pkg.dependencies),
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    commonjs({
      extensions: ['.js'],
      exclude: ['node_modules/**'],
      transformMixedEsModules: true
    }),
    terser()
  ]
}

module.exports = config
