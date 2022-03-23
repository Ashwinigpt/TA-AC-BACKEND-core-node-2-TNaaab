console.log("/home/ashwini/Documents/node.js/block-BNaabe/TA-AC-BACKEND-core-node-2-TNaaab/block-BNaabe/node/app.js");
console.log("/home/ashwini/Documents/node.js/block-BNaabe/TA-AC-BACKEND-core-node-2-TNaaab/block-BNaabe/node/server.js");
console.log("./index.html");

// path

let path = require('path');

let absolutePath = __dirname;
let relativePath = './index.html';

let formPath = path.join(absolutePath, relativePath);

console.log(formPath);

// Capture data on server

let http = require('http');