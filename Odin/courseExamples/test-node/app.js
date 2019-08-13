var express = require('express');
var app = express();

app.get('/', (req, res)=>{res.send('hello world')}).listen(8080);