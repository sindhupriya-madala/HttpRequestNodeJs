const https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (responce) => {
    responce.setEncoding('utf8');
    responce.on('data', (chunk) => {
      console.log("Chunk received :  ", chunk);
    });
  });
}
getAndPrintHTMLChunks();
