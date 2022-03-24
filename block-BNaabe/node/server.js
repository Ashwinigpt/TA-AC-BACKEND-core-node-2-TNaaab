// path

const path = require('path');
console.log(__filename);
console.log(__dirname + '/app.js');
console.log('/index.html');
var requiredPath = path.join(__dirname, '/index.html');
console.log(requiredPath);


// Capture data on server

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    var store = '';
    req.on('data', (chunk) => {
      store += chunk;
    })
    req.on('end', () => {
      req.statusCode = 201;
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    });
  }
}

server.listen(3000, () => {
  console.log('Port is listening on port 3000');
});