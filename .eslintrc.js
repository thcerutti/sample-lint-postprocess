module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ["my-lint"],
  processor: 'my-lint/myProcessor',
  rules: {
    "no-undef": 1,
  },
};
