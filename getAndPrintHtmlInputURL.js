function getAndPrintHTML (options) {

  const https = require("https");
  let responceString = '';
  https.get(options, (response) => {
    response.on('data', (chunk) => {
      //Adding chunks of data to a string variable.until response ends.
      responceString += chunk;
    });
    //following event occurs when our response ends.
    response.on('end', () => {
          console.log("responce string is : ",responceString);
    });
  });

}
// preparing request URL object.
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);