module.exports = function getHTML (options, callback) {
  var https = require('https');
  var data = '';
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
};