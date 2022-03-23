let http = require('http');
let qs = require('querystring');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let store = '';
    req.on('data', (chunk) => {
        store += chunk;
    });

    req.on('end', () => {
        if(req.method === 'POST' && req.url === '/json') {
            console.log(store);
            res.setHeader('Content-Type', "application/json")
            res.end(store);
        }
        if(req.method === 'POST' && req.url === '/form'){
            console.log(store);
            let parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
        }
    })
}
server.listen(7000, () => {
    console.log('Server listening on port 7000 ');
})