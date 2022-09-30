// const dataUploader = require('./dataUploader');
const fs = require('fs');

module.exports = {
  processors: {
    myProcessor: {
      // takes a Message[][] and path
      postprocess: function (messages, path) {
        console.log(`Ran on file ${path}`);

        const content = {
          messages,
          branch: "main",
          repository: "my-repo",
          mfe: "my-mfe",
          owner: "NathPaiva",
          buildId: "0x1da65",
          buildUrl: "https://..."
        }
        const fileName = 'content.txt'
        if (fs.existsSync(fileName)) {
          fs.appendFile(fileName, ','+JSON.stringify(content), (err) => console.log(err));
        } else {
          fs.appendFile(fileName, JSON.stringify(content), (err) => console.log(err));
        }

        // dataUploader.uploadLintData(content, messages);
        return [].concat(...messages);
      },
    },
  },
};
