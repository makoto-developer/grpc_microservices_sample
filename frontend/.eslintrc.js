const [never, warn, error] = ['never', 'warn', 'error']
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'comma-dangle': [error, 'always-multiline'],
    'comma-style': [error, 'last'],
    'curly': [error, 'multi-line'],
    'eol-last': [error, 'always'],
    'func-call-spacing': error,
    'indent': [error, 2],
    'keyword-spacing': [error, {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true },
      },
    }],
    'max-len': [error, 120, {
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreComments': true,
    }],
    'consistent-return': error,
    'prefer-destructuring': [error, { 'array': false, 'object': false }, { 'enforceForRenamedProperties': false }],
    'prefer-object-spread': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'function-call-argument-newline': warn, // TODO: enable
    'function-paren-newline': 0,
    'no-return-assign': [error, 'always'],
    'no-var': error,

    'no-plusplus': [error, { 'allowForLoopAfterthoughts': true }],
    'no-param-reassign': warn,
    'no-restricted-syntax': [error, {
      'selector': 'ObjectPattern',
      'message': 'Object destructuring is not compatible with Node v4',
    }],
    'prefer-const': error,
    'quotes': [error, 'single', {
      'allowTemplateLiterals': true,
      'avoidEscape': true,
    }],
    'object-curly-spacing': [error, 'always'],
    'object-shorthand': [error, 'always', {
      'ignoreConstructors': false,
      'avoidQuotes': true,
    }],
    'one-var': [error, 'never'],
    'strict': [error, 'safe'],
    'semi': [error, 'never'],
    'valid-jsdoc': [error, {
      'requireReturn': false,
      'requireParamDescription': false,
      'requireReturnDescription': false,
    }],
    'space-before-function-paren': [error, {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],

    'eslint-plugin/meta-property-ordering': 'error',
    'eslint-plugin/no-deprecated-context-methods': 'error',
    'eslint-plugin/no-deprecated-report-api': 'off',
    'eslint-plugin/prefer-replace-text': 'error',
    'eslint-plugin/report-message-format': 'error',
    'eslint-plugin/consistent-output': [error, 'always'],
    'eslint-plugin/require-meta-docs-description': [error, { 'pattern': '^(Enforce|Require|Disallow)' }],
    'eslint-plugin/require-meta-schema': 'error',
    'eslint-plugin/require-meta-type': 'error',
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': [
          'src',
        ],
      },
    },
  },
  'overrides': [
    {
      'files': 'src/**',
      'rules': {
        'no-template-curly-in-string': warn,
      },
    },
  ],
}
