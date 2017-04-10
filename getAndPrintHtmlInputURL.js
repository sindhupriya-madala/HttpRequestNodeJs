function getAndPrintHTML (options) {

  const https = require("https");
  let responceString = '';

  https.get(options, (response) => {
    response.on('data', (chunk) => {
      responceString += chunk;
    });
    response.on('end', () => {
          console.log("responce string is : ",responceString);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);