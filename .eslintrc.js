module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended' // or 'plugin:vue/base'
  ],
  rules: {
    // override/add rules' settings here
    'vue/valid-v-if': 'error'
  }
}
