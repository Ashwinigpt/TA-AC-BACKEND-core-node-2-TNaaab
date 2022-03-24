// path

const relativePath = '../client/index.js';

const path = require('path');

const absolutePath = path.join(__dirname, '..', 'client/index.js');

console.log(absolutePath);
