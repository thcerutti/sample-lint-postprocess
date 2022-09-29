const axios = require("axios").default;
const { processorUrl } = require("./config");

module.exports = {
  uploadLintData: (
    { branch, repository, mfe, owner, buildId, buildUrl },
    messages
  ) => {
    const content = {
      messages,
      branch,
      repository,
      mfe,
      owner,
      buildId,
      buildUrl,
    };
    let url = process.env.POST_URL || processorUrl;
    axios
      .post(url, content)
      .then(() => console.log("data uploaded!"));
  },
};
