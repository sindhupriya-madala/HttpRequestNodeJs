
function getAndPrintHTML() {
  const https = require("https");

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }
  let responceString = '';

  https.get(requestOptions, (response) => {
    response.on('data', (chunk) => {
      responceString += chunk;
    });
    response.on('end', () => {
          console.log("responce string is : ",responceString);
    });
  });

}
getAndPrintHTML();