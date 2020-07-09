const http = require('http');

const hello = require('./hello.json');
const world = require('./world.json');
const { url } = require('inspector');
const urlQuery = require('url');

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    /* To acces query params*/
    // const queryObject = urlQuery.parse(req.url, true).query;
    // return res.end(JSON.stringify(queryObject));

    if (req.url === '/hello') {
      return res.end(JSON.stringify(hello));
    } else if (req.url === '/world') {
      return res.end(JSON.stringify(world));
    }

    res.statusCode = 404;
    return res.end(JSON.stringify({ error: 'Not found' }));
  })
  .listen(3000);

console.log('Server is running...');
