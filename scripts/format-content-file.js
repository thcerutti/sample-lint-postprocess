const fs = require("fs");

fs.readFile("./content.txt", { encoding: "utf8" }, (_, data) => {
  let fileJsonData = `[${data}]`;

  console.log(Buffer.from(fileJsonData).toString("base64"));
  let postData = {
    messages: [
      {
        data: fileJsonData,
        attributes: {
          key: "value",
        },
      },
    ],
  };
  fs.writeFile('postBody.json', JSON.stringify(postData), (_) => {});
});
