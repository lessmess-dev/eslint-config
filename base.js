
module.exports = {
  extends: 'standard',
  plugins: [
    'security',
    'node',
    'import-helpers'
  ],
  rules: {
    'standard/no-callback-literal': 'off',

    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'node/no-unpublished-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',

    'import-helpers/order-imports': ['error', {
      'groups': [
        ['builtin', 'external', 'internal'],
        ['parent', 'sibling', 'index']
      ],
      'newlines-between': 'always'
    }],

    'nonblock-statement-body-position': 'error',
    'no-misleading-character-class': 'error',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'block-scoped-var': 'error',
    'no-invalid-this': 'error',
    'global-require': 'error',
    'no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all'
    }],
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': ['error', 80],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true
  }
}
