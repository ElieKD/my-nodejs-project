function handleRequest(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
}

module.exports = handleRequest;


const myEmitter = require('./eventEmitter');

function handleRequest(req, res) {
    // Emit an event whenever a request is received
    myEmitter.emit('requestReceived', req);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
}

module.exports = handleRequest;
