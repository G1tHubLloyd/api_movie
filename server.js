const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname;

  // Log request URL and timestamp
  const logEntry = `${new Date().toISOString()} - ${request.url}\n`;
  fs.appendFile('log.txt', logEntry, err => {
    if (err) console.error('Logging failed:', err);
  });

  // Serve appropriate HTML file
  if (path.includes('documentation')) {
    fs.readFile('documentation.html', (err, data) => {
      if (err) {
        response.writeHead(500);
        response.end('Error loading documentation.html');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      }
    });
  } else {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500);
        response.end('Error loading index.html');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      }
    });
  }
});

server.listen(5500, () => {
  console.log('Server is listening on port 5500');
});
