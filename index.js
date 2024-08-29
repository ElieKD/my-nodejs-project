const http = require('http');
const handleRequest = require('./requestHandler');

const server = http.createServer(handleRequest);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
