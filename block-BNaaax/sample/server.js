var path = requires('path');

var absolutePath = __dirname;
var relativePath = './server.js'

console.log(absolutePath);

console.log(relativePath);

var formPath = path.join(__dirname, 'server.js');