const fs = require('fs');
const { resourceUsage } = require('process');
const util = require('util');

/*
//synchronous means goes in order First in first out
console.log('first');
console.log('second');
*/

//asychrous code means that it will step to the "side"
//or to be technical go to the callback queue
/*
console.log('first');
console.log('second');
setTimeout(() => {
  console.log('Wait for me!!');
}, 2000);
console.log('third');
console.log('fourth');
*/

//set timeout is asynch it goes to the callback queue
/*
let num = 2000;
console.log('first');
console.log('second');
setTimeout(() => {
  console.log('Guillian');
}, 2000);
setTimeout(() => {
  console.log('Fahad!');
}, 1000);
console.log('third');
console.log('fourth');
*/

/*this is another example of asych vs syc
//read file is asychronous
fs.readFile('first.txt', (err, data) => {
  console.log(data.toString());
});
console.log('The file was read');

//sychronous
let syncTest = fs.readFileSync('stuffSync.txt', 'utf8');
console.log(syncTest);
console.log('This is sync');
*/

//call back
/*
fs.readFile('first.txt', (err, data) => {
  fs.readFile(data.toString(), (err, data) => {
    console.log(data.toString());
  });
});
*/
/*
//callbacks hell
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
//promises instead of callbacks
//promise is what happens if it is fullied
//the reject is what will happen if it fails(catch)

//basic promise
/*
new Promise((resolve, reject) => {
  resolve('this worked');
  reject('naw nope');
})
  .then(value => {
    console.log(value);
  })
  .catch(jusku => {
    console.log(jusku);
  });
*/
/*
new Promise((resolve, reject) => {
  resolve('this worked');
  reject('naw nope');
})
  .then(value => {
    return 0;
  })
  .then(value => {
    if (value == 1) {
      return 'how could you choose the number 1';
    } else {
      return 'stop changing the value';
    }
  })
  .then(value => {
    console.log(value);
  })
  .catch(jusku => {
    console.log(jusku);
  });
*/
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

//reading a file as a promise
new Promise((resolve, reject) => {
  fs.readFile('first.txt', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})*/
var read = util.promisify(fs.readFile);

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
