const fs = require('fs');
const util = require('util');
const { resourceUsage } = require('process');

//Asychronous Code Example.  Remember if we use sychronous code it just goes in order.
//notice that these will go in order.  This is an example of synch code.
//ex
/*
console.log('1st');
console.log('2nd');

//This is an example of a asychronous code.  //set timeout is a timeout function

console.log('1st');
console.log('2nd');

setTimeout(() => {
  console.log('We are running the timeout');
}, 3000);

console.log('3rd');
console.log('4th');
*/
//Show the example of setting the settime out timeout to 0.

//Normally async code is used with HTTP request.  Single Threaded, use the chef example.  call back queue
//notice the console.log('I come before') is still running before the read file
/*
nawwwwww don't cover this
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');
*/
/*
fs.readFile('stuff.txt', (err, data) => {
  console.log(data.toString());
});
console.log('here');

//we can also read syncwise
let syncTest = fs.readFileSync('stuffSync.txt', 'utf8');
console.log(syncTest);
console.log('here');
/

*/
//the callback queue order is who finishes first
//ex
/*
for (let i = 0; i <= 6; i++) {
  fs.readFile(`cbTest/cbTest${i}.txt`, (err, data) => {
    console.log(data.toString());
  });
}
console.log('I will always be first!');
*/
//callback hell example
//this is hard to read because each file depends on the other
//mention the triangle
//the first one that finishes goes first.
//don't speed past this one, take it slow******
/*
fs.readFile('first.txt', (err, data) => {
  //this will show second.txt which we will use as a parameter in the call back
  //console.log(data.toString());
  fs.readFile(data.toString(), (err, data) => {
    fs.readFile(data.toString(), (err, data) => {
      fs.readFile(data.toString(), (err, data) => {
        console.log(data.toString());
      });
    });
  });
});
*/
//Promises handle this easier
//the resolve is what will happen if it works (then)
//the reject is what will happen if it fails(catch)
//**do both and show them.  uncomment both */
/*
const promise = new Promise((resolve, reject) => {
  resolve('this worked');
  reject('try again');
})
  .then(value => {
    console.log(value);
  })
  .catch(naw => {
    console.log(naw);
  });
*/
//now show multiple .then with result.
//the result will be the parameter for the next then
//but if we have an reject, it will ignore all the thens
//you can also throw errors too
/*
const promise = new Promise((resolve, reject) => {
  resolve('this worked');
  //reject('try again');
})
  .then(value => {
    //throw `naw homie`;
    console.log(value);
    return 1;
  })
  .then(value => {
    console.log(value);
    return 2;
  })
  .then(value => {
    console.log(value);
    return 3;
  })
  .catch(naw => {
    console.log(naw);
  });
*/

//real world example?
//why not callback.  Pushing you out to right
//why promises over callback
/*
fs.readFile('first.txt', (err, data) => {
  fs.readFile(data.toString(), (err, data) => {
    fs.readFile(data.toString(), (err, data) => {
      fs.readFile(data.toString(), (err, data) => {
        console.log(data.toString());
      });
    });
  });
});
*/
/*
new Promise((resolve, reject) => {
  fs.readFile('first.txt', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})
  .then(result => {
    //console.log(data.toString());
    return result;
  })
  .then(result => {
    //console.log(result.toString());
    return 'lets just test';
    //fs.readFile(result.toString(), (err, data) => {
    //console.log(data.toString());
    //});
  })
  .then(result => {
    console.log(result);
    //return data.toString();
  })
  .then(data => {
    //console.log(data.toString());
    //return data.toString();
  })
  .catch(err => {
    console.log(err);
  });
*/
var read = util.promisify(fs.readFile);
/*
read('first.txt')
  .then(data => {
    return data.toString();
  })
  .then(data => {
    return read(data.toString());
  })
  .then(data => {
    return read(data.toString());
  })
  .then(data => {
    return read(data.toString());
  })
  .then(data => {
    console.log(data.toString());
  });
*/

Promise.all([read('first.txt'), read('second.txt'), read('third.txt')]).then(
  data => {
    const [file1, file2, file3] = data;

    console.log(file1.toString());
  }
);
