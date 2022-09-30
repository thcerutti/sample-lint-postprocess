const fs = require("fs");

module.exports = {
  processors: {
    myProcessor: {
      postprocess: function (messages, path) {

        const appendToFile = (message) => {
          const fileName = "content.txt";
          
          let prefix = fs.existsSync(fileName) ? "," : "";
          fs.appendFile(fileName, prefix + JSON.stringify(message), (err) =>
            console.log(err)
          );
        };

        messages.flat().map((message) => {
          let warningMessage = {
            branch: "main",
            repository: "my-repo",
            mfe: "my-mfe",
            owner: "NathPaiva",
            buildId: "0x1da65",
            buildUrl: "https://...",
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
