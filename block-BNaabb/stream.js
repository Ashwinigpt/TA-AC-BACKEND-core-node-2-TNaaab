let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    });
    req.on('end', () => {
        console.log(store);
    })
}

server.listen(3456, () => {
    console.log('Server listening port on 3456');
})