const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let store = '';
    req.on('data', (chunk) => {
        store += chunk;
    });

    req.on('end', () => {
        if (req.method === 'GET' && req.url === '/form') {
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream('./form.html').pipe(res);
        }
        if (req.method === 'POST' && req.url === '/form') {
            let parsedData = qs.parse(store);
            res.setHeader('Content-Type', 'text/html');
            res.write(`<h2>${parsedData.name}</h2>`);
            res.write(`<h3>${parsedData.email}</h3>`);
            res.write(`<h4>${parsedData.age}</h4>`);
            res.end();
        }
    });
}

server.listen(5678, () => {
    console.log('Server listening on port 5678');
})