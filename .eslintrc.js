module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb/hooks', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': ['error', 'unix'],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
