const fs = require('fs');
const path = require('path');
const myEmitter = require('./eventEmitter');

function handleRequest(req, res) {
    // Emit an event whenever a request is received
    myEmitter.emit('requestReceived', req);

    // Serve the index.html file
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
}

module.exports = handleRequest;

