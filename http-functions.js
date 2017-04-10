const https = require("https");

function getHTML ( options, callback) {
  let responseString = '';
  https.get(options, (response) => {
    response.on('data', (chunk) => {
      responseString += chunk;
    });

    response.on('end', () => {
      callback(responseString);
    });
  });

}

module.exports = {
  getHTML: getHTML
}