const http = require('http');
const fs = require('fs');
const path = require('path');

const hello = require('./hello.json');
const world = require('./world.json');

http
  .createServer((req, res) => {
    if (req.url === '/hello') {
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(hello));
    } else if (req.url === '/world') {
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(world));
    }

    if (req.url === '/') {
      return fs.readFile(
        path.resolve(__dirname, './index.html'),
        (err, htmlString) => {
          if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Not found' }));
          }

          return res.end(htmlString);
        }
      );
    }

    if (req.url === '/styles.css') {
      return fs.readFile(
        path.resolve(__dirname, './styles.css'),
        (err, styleString) => {
          if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Not found' }));
          }

          return res.end(styleString);
        }
      );
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    return res.end(JSON.stringify({ error: 'Not found' }));
  })
  .listen(3000);

console.log('Server running...');
