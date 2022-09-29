//import uploadData from './dataUploader'
// const axios = require('axios').default;
const dataUploader = require('./dataUploader');
//import {dataUploader} from './dataUploader';

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

        dataUploader.uploadLintData(content, messages);
        return [].concat(...messages);
      },
    },
  },
};
