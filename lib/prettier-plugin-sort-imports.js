module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    // Dependencies
    '<THIRD_PARTY_MODULES>',
    '^.+.?/node_modules(.*)$',
    '^.+.?/lib(.*)$',
    // Web
    '^.+.?/pages(.*)$',
    // Mobile
    '^.+.?/navigation/singUp(.*)$',
    '^.+.?/navigation/singIn(.*)$',
    '^.+.?/navigation/private(.*)$',
    '^.+.?/navigation/stacks(.*)$',
    '^.+.?/navigation(.*)$',
    '^.+.?/screens(.*)$',
    // Desctop
    '^.+.?/windows(.*)$',
    // Server
    '^.+.?/routes(.*)$',
    // Common
    '^.+.?/scripts(.*)$',
    '^.+.?/components/native(.*)$',
    '^.+.?/components/static(.*)$',
    '^.+.?/components/abstract(.*)$',
    '^.+.?/components/animation(.*)$',
    '^.+.?/components/ui(.*)$',
    '^.+.?/components(.*)$',
    '^.+.?/hooks(.*)$',
    '^.+.?/interfaces(.*)$',
    '^.+.?/types(.*)$',
    '^.+.?/tests(.*)$',
    '^.+.?/providers(.*)$',
    '^.+.?/store(.*)$',
    '^.+.?/services(.*)$',
    '^.+.?/helpers/(utils.*)$',
    '^.+.?/helpers/(constants.*)$',
    '^.+.?/helpers(.*)$',
    '^.+.?/utils(.*)$',
    '^.+.?/constants(.*)$',
    '^.+.?/theme/(units.*)$',
    '^.+.?/theme/(fonts.*)$',
    '^.+.?/theme/(weights.*)$',
    '^.+.?/theme/(borders.*)$',
    '^.+.?/theme/(colors.*)$',
    '^.+.?/theme/(shadows.*)$',
    '^.+.?/theme/(transparencies.*)$',
    '^.+.?/theme/(transitions.*)$',
    '^.+.?/theme/(breakpoints.*)$',
    '^.+.?/theme/(mixins.*)$',
    '^.+.?/theme(.*)$',
    '^.+.?/assets/fonts(.*)$',
    '^.+.?/assets/icons(.*)$',
    '^.+.?/assets/images(.*)$',
    '^.+.?/assets(.*)$',
    '^[./]'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx']
}
