// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// function name(params) {
  
// }
var web = require('http');

web.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("Question 01 : "+sum(5,4));
  // Q2();
  res.end("Check console to view answers");

}).listen(8080)

function Q1(){
  console.log("Question 01 Answer: "+Q1()+"\n");
}

function sum(a,b){
  return (a+b);
}

function Q2(){
  var arr = [1,2,3,4,6,8];
  console.log("Question 2 Answers\n");
  for(const i of arr){
    console.log(`${i*i}`);
  }
}