const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let store = '';
    req.on('data', (chunk) => {
        store += chunk;
    });
    req.on('end', () => {
        console.log(store);
    });

    if (req.method === 'GET' && req.url === '/form') {
        res.serHeader('Content-Type', 'text/html');
        fs.createReadStream('./form.html').pipe(res);
    }

}

server.listen(5678, () => {
    console.log('Server listening on port 5678');
})