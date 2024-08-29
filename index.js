const http = require('http');
const handleRequest = require('./requestHandler');

const server = http.createServer(handleRequest);

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
