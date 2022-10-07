module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ["dashboard-g11n"],
  processor: 'dashboard-g11n/dataUploaderProcessor',
  rules: {
    "no-undef": 1,
    "no-unused-vars": 1,
  },
};
