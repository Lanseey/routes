var http = require('http'); //1 - Import Node.js core module
var routes = require('./routes.js');
var server = http.createServer(function (req, res) {
  // 2 - Creating server

  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(routes.root.function(routes.root.name));
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(routes.about.function(routes.root.name));
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(routes.contact.function(routes.root.name));
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(routes.gallery.function(routes.root.name));
    res.end();
  } else {
    res.end('Invalid Requests!');
  }
});

server.listen(5000); // - listen for any incoming requests..

console.log('Node.js web server at port 5000 is running.. :D');
