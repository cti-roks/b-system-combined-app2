const http = require('http');
const server = http.createServer((req, res) => {
  console.log('access');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! CTI!!from b-system-combined-app2-v2');
});

server.listen(8082, () => {
  console.log('Server is running at http://localhost:8081');
});
