var https = require('https');
var data = '';

function getAndPrintHTML (options) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (chunk) {

      data += chunk;

    });

    response.on('end', function() {
      console.log(data);
      console.log('Response complete');
    })
  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);