// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// function name(params) {

// }
var web = require('http');

web.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write("Question 01 : "+sum(5,4));
  res.end("Check console to view answers");
  Q1();
  Q2();
  Q3();
  Q4();
  Q5();
  question();

}).listen(8080)

function Q1() {
  console.log("Question 01 Answer: " + sum(6, 9) + "\n");
}

function sum(a, b) {
  return (a + b);
}

function Q2() {
  var arr = [1, 2, 3, 4, 6, 8];
  console.log("Question 2 Answers\n");
  for (const i of arr) {
    console.log(`${i * i}`);
  }
  console.log("\n");
}

function Q3() {
  console.log("Question 03 Answer: " + findMax());
}
function findMax() {
  var arr = [61, 25, 32, 4, 63, 8];
  if (arr.length > 1) {
    var temp = arr[0];
    for (var i in arr) {
      temp = Math.max(temp, i);
    }
    return temp;
  }
  if (arr.length == 1) {
    return arr[0];
  }
  else {
    return 0;
  }

}

function Q4() {
  console.log("Question 04 Answer: " + factorial(6) + "\n");
}

function factorial(x) {
  if (x == 1) {
    return 1;
  }
  else {
    return x * factorial(x - 1);
  }
}


function Q5() {
  const fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return;
    }
    else {
      const jsonData = JSON.parse(data);
      const name = jsonData.name;
      const age = jsonData.age;

      console.log("Question 05");
      console.log('Name:', name);
      console.log('Age:', age);
    }
  });

  function Q6(){
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter a string: ', (inputStr) => {
      const reversedStr = inputStr.split('').reverse().join('');
      console.log('Reversed string:', reversedStr);

      rl.close();
    });

  }
  

}