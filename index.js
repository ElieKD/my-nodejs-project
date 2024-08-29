const http = require('http');
const fs = require('fs');
const path = require('path');
const handleRequest = require('./requestHandler');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');
const myEmitter = require('./eventEmitter');

// Create a static file handler for serving CSS and other static files
const serve = serveStatic(path.join(__dirname), { index: false });

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        handleRequest(req, res);
    } else {
        serve(req, res, finalhandler(req, res));
    }
});

// Listen for the 'requestReceived' event
myEmitter.on('requestReceived', (req) => {
    console.log(`Received a ${req.method} request for: ${req.url}`);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
