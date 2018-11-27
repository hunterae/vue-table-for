module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  plugins: ['vue'],

  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier']
}
