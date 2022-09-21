const axios = require('axios').default;

module.exports = {
  processors: {
    myProcessor: {
      // takes a Message[][] and path
      postprocess: function (messages, path) {
        console.log("*====================================");
        console.log(JSON.stringify(messages));
        console.log(path);
        axios.post('http://localhost:1880/lint-data', messages)
          .then(() => console.log('feito meu patrão'));
        console.log("====================================");
        return [].concat(...messages);
      },
    },
  },
};
