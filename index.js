const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === '/cse341') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! My name is Elizabeth!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Listen on a port
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});