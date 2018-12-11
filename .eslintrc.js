module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  plugins: ['vue'],

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ]
}
