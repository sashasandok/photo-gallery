module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'parser': 'babel-eslint',
  'extends': [
    'plugin:react/recommended',
    'google',
    'prettier',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': ['error', 'never'],
    'space-before-function-paren': 0,
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'ignore',
      },
    ],
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': false,
        'MethodDefinition': false,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false,
        'FunctionExpression': false,
      },
    }],
    'object-curly-spacing': 'off',
    "max-len": ["error", {"code": 100}],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"],
    "new-cap": ["off"],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
}
