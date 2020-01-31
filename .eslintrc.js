module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser': true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'SERVER_PATH': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true
    }
  },
  'rules': {
    "react/prop-types": 0,
    'indent': ['error', 4],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    "no-console": "error",
    'arrow-spacing': ['error'],
    'prefer-arrow-callback': ['error'],
    // 'prefer-const': ['error'],
    'camelcase': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error'],
    'key-spacing': ['error'],
    'no-trailing-spaces': ['error'],
    'handle-callback-err': ['error'],
    'max-len': ['warn', {
      code: 120
    }]
  }
};