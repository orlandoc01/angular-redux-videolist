'use strict';
let express = require('express');
let path = require('path');
let morgan = require('morgan');
let httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer();
let app = express();
let port = process.env.PORT || 3000; 

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));


if(!process.env.NODE_ENV === 'production')  {
  let bundle = require('./server/bundle.js');
  bundle();

  //Any requests to localhost:3000/build is proxied to webpack-dev-server
  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:8080'});
  });
}

proxy.on('error', e => console.log('Connection to Proxy failed'));

app.listen(port, () => console.log(`Server running on port ${port}`));
