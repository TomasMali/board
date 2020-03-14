

const http = require('http');

const app = require('./app')

const port = process.env.PORT || 3002;

const https = require('https');


const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

//const server = https.createServer(options, app);

//server.listen(port)


https.createServer(options, app).listen(port);