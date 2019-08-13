let url = require('url');
let http = require('http');
let fs = require('fs');
var express = require('express');
var app = express();


// below is code essentially copied from one of odin's classes

// http.createServer((req, res)=> {
//   let q = url.parse(req.url, true);
//   let filename = "." + q.pathname;

//   // console.log('q', q);
//   // console.log('filename', filename);


//   fs.readFile(filename, (err, data) => {
//     // console.log('data', data); //output: data <Buffer 3c 68...
//      if(err){
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// let handleRequest = functio(request, response){
//   if

// }

// solution below is from a student
// function renderHTML(path, res) {
//   fs.readFile(path, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});      
//       return res.end("Page not found error.");
//     }  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }

// http.createServer(function (req, res) {
//   var path = url.parse(req.url).pathname;
//   switch (path) {
//     case '/' :
//       renderHTML('./index.html', res);
//       break;
//     case '/index' :
//       renderHTML('./index.html', res);
//       break;
//     case '/about' :
//       renderHTML('./about.html', res);
//       break;
//     case '/contact-me' :
//       renderHTML('./contact-me.html', res);
//       break;
//     default :
//       renderHTML('./404.html', res);

//   }
// }).listen(8080);

//solution below is my own after reading section on express




// app.get('/', function(req, res) {
//   res.write("index.html");
//   console.log('calling from /');
//   return res.end();
// });

// app.get('/about', function(req, res) {
//   res.write("about.html");
//   console.log('calling from /about')
//   return res.end();
// });
// app.get('/contact-me', function(req, res) {
//   res.write("contact-me.html");
//   return res.end();
// });

// app.listen(8080);


// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });