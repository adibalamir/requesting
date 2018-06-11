var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      var bufferData;
      bufferData += data;
      console.log(bufferData);
    });

    response.on('end', function() {
      console.log('Response complete');
    })
  });

}

getAndPrintHTML();