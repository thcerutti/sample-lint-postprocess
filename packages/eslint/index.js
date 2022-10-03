const fs = require("fs");

module.exports = {
  processors: {
    myProcessor: {
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
