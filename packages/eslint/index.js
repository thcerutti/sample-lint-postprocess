const fs = require("fs");

module.exports = {
  processors: {
    myProcessor: {
      // takes a Message[][] and path
      postprocess: function (messages, path) {
        console.log(`Ran on file ${path}`);

        const fileName = "content.txt";
        const appendToFile = (fileName, message) => {
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
          appendToFile(fileName, warningMessage);
        });

        return [].concat(...messages);
      },
    },
  },
};
