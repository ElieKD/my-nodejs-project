function handleRequest(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
}

module.exports = handleRequest;


const myEmitter = require('./eventEmitter');


function handleRequest(req, res) {
    // Emit an event whenever a request is received
    const myEmitter = require('./eventEmitter');
    myEmitter.emit('requestReceived', req);

    // Serve an HTML response with Bootstrap 5 included
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello, World!</title>
            <!-- Bootstrap 5 CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="display-4 text-primary mt-5">Hello, World!</h1>
                        <p class="lead">This page is styled with Bootstrap 5.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
}

module.exports = handleRequest;
