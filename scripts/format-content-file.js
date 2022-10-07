const fs = require("fs");

fs.readFile("./content.txt", { encoding: "utf8" }, (_, data) => {
  let fileJsonData = `[${data}]`;

  let postData = {
    messages: [
      {
        data: Buffer.from(fileJsonData).toString("base64"),
        attributes: {
          key: "value",
        },
      },
    ],
  };
  fs.writeFile('postBody.json', JSON.stringify(postData), (_) => {});
});
