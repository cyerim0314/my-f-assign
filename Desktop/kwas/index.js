const http = require('http');
const { normalize } = require('path');
const hostname = '127.0.0.1';
const port = 4000;
var d=new Date();
var n=d.toString();
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end(n);
});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
