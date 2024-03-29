module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ["example", "dashboard-g11n"],
  processor: "dashboard-g11n/dataUploaderProcessor",
  rules: {
    "no-undef": 1,
    "no-unused-vars": 1,
    "example/enforce-foo-bar": "warn",
  },
};
