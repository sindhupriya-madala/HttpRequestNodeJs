const https = require("https");
let responseString = '';
function getHTML ( options, callback) {
  https.get(options, (response) => {
    response.on('data', (chunk) => {
      responseString += chunk;
    });

    response.on('end', () => {
      callback(responseString);
    });
  });

}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
                       host: 'sytantris.github.io',
                       path: '/http-examples/step4.html'
                      };
getHTML(requestOptions,printHTML);
