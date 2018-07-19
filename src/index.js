const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
app.use('/', express.static(__dirname + '/public'));
http.createServer(app).listen(8000);