const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Aditya, the server is responding correctly!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});