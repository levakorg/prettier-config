module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  // rangeStart: 0,
  // rangeEnd: infinity,
  // parser: null,
  // filepath: null,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  // vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^.+.?/node_modules/(.*)$',
    '^.+.?/lib/(.*)$',
    '^.+.?/pages/(.*)$',
    '^.+.?/navigation/singUp/(.*)$',
    '^.+.?/navigation/singIn/(.*)$',
    '^.+.?/navigation/private/(.*)$',
    '^.+.?/navigation/(.*)$',
    '^.+.?/screens/(.*)$',
    '^.+.?/components/native/(.*)$',
    '^.+.?/components/static/(.*)$',
    '^.+.?/components/abstract/(.*)$',
    '^.+.?/components/animation/(.*)$',
    '^.+.?/components/ui/(.*)$',
    '^.+.?/components/(.*)$',
    '^.+.?/providers/(.*)$',
    '^.+.?/hooks/(.*)$',
    '^.+.?/interfaces/(.*)$',
    '^.+.?/types/(.*)$',
    '^.+.?/store/(.*)$',
    '^.+.?/services/(.*)$',
    '^.+.?/helpers/(utils.*)$',
    '^.+.?/helpers/(constants.*)$',
    '^.+.?/helpers/(.*)$',
    '^.+.?/utils/(.*)$',
    '^.+.?/constants/(.*)$',
    '^.+.?/theme/(units.*)$',
    '^.+.?/theme/(borders.*)$',
    '^.+.?/theme/(shadows.*)$',
    '^.+.?/theme/(fonts.*)$',
    '^.+.?/theme/(weights.*)$',
    '^.+.?/theme/(colors.*)$',
    '^.+.?/theme/(transparencies.*)$',
    '^.+.?/theme/(transitions.*)$',
    '^.+.?/theme/(breakpoints.*)$',
    '^.+.?/theme/(mixins.*)$',
    '^.+.?/theme/(.*)$',
    '^.+.?/assets/fonts/(.*)$',
    '^.+.?/assets/icons/(.*)$',
    '^.+.?/assets/images/(.*)$',
    '^.+.?/assets/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx']
}
