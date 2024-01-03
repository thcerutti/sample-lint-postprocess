module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["dashboard-g11n", "check-external-url"],
  processor: "dashboard-g11n/dataUploaderProcessor",
  rules: {
    "no-undef": 0,
    "no-unused-vars": 0,
    "check-external-url/external-url-found": 1,
  },
};
