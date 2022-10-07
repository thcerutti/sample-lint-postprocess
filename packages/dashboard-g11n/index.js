const fs = require("fs");

module.exports = {
  processors: {
    dataUploaderProcessor: {
      postprocess: function (messages, path) {

        const appendToFile = (message) => {
          const fileName = "content.txt";
          
          let prefix = fs.existsSync(fileName) ? "," : "";
          fs.appendFile(fileName, prefix + JSON.stringify(message), (err) =>{
            if (err)
              console.log('Error: ', err)
          });
        };

        messages.flat().map((message) => {
          let warningMessage = {
            branch: process.env.CIRCLE_BRANCH,
            repository: process.env.CIRCLE_PROJECT_REPONAME,
            mfe: "my-mfe",
            owner: "NathPaiva",
            buildId: process.env.CIRCLE_BUILD_NUM,
            buildUrl: process.env.CIRCLE_BUILD_URL,
            timestamp: new Date().toISOString(),
            path,
            ...message,
          };
          appendToFile(warningMessage);
        });

        return [].concat(...messages);
      },
    },
  },
};
