const checkExternalUrlRule = require("./checkExternalUrl");
const plugin = { rules: { "external-url-found": checkExternalUrlRule } };
module.exports = plugin;
