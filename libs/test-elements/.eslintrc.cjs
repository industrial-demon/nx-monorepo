module.exports = {
  root: true,
  extends: ['custom', 'plugin:storybook/recommended'],
  rules: {
    // React scope no longer necessary with new JSX transform
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 0
  }
};