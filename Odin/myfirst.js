// var http = require("http");
// // var dt = require('./myfirstmodule');
// let url = require('url');

// http.createServer((req, res) =>{
//   res.writeHead(200, {'Content-type': 'text/html'});
//   // res.write(req.url);
//   let q = url.parse(req.url, true).query;
//   alert(q);
//   let text = q.year + " " + q.month;
//   res.end(text);
//   // res.write("the date and time are currently: " + dt.myDateTime());
//   // res.end();
// }).listen(8090);
// let http = require('http');
// let fs = require('fs');

// http.createServer((req,res) => {
//   fs.readFile('test.html', (err, data)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end()
//   });
// }).listen(8080);
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);


// let http = require('http');
// let url = require('url');

// http.createServer((req,res) => {
//   console.log(res);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   let q = url.parse(req.url,true).query;
//   let y = q.year + " " + q.month;
//   res.write(y);
//   res.end()
// }).listen(8080);

// var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// let url = require('url');
// let adr = 'http://localhost:8080/default.htm?year=2017&month=feb';
// let q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata.month);

let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((req, res)=> {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;

  // console.log('q', q);
  // console.log('filename', filename);


  fs.readFile(filename, (err, data) => {
    console.log('data', data);
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

































