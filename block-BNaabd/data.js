let http = require('http');
let qs = require('querystring');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let dataFormat = req.headers['content-type'];
    let store = '';
    req.on('data', (chunk) => {
        store =+ chunk;
    });

    req.on('end', () => {
        if(dataFormat === "application/json") {
            let parsedData = JSON.parse(store);
            res.end();
        }
        if(dataFormat === "application/x-www-form-urlencoded"){
            let parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
        }
    })
}
server.listen(7000, () => {
    console.log('Server listening on port 7000 ');
})