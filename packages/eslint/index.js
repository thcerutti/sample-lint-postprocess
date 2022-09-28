const axios = require('axios').default;
const { processorUrl } = require('./config')

module.exports = {
  processors: {
    myProcessor: {
      // takes a Message[][] and path
      postprocess: function (messages, path) {
        console.log("*====================================");
        console.log(JSON.stringify(messages));
        console.log(path);
        const content = {
          messages,
          branch: "main",
          repository: "my-repo",
          mfe: "my-mfe",
          owner: "NathPaiva",
          buildId: "0x1da65",
          buildUrl: "https://..."
        }
        axios.post(processorUrl, content)
          .then(() => console.log('feito meu patrão'));
        console.log("====================================");
        return [].concat(...messages);
      },
    },
  },
};
