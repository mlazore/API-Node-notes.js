// console.log(); // global 

// setTimeout()// sets a delay
// clearTimeout();

// setInterval(() => {
    
// }, interval);

// clearInterval

// window.console.log


// const logger = require(`./logger`);

// log(`message`);

// const path = require(`path`)

// var pathObject = path.parse(__filename);

// console.log(pathObject)



/////// OS module

const os = require(`os`);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(`Total Memory: ` + totalMemory);

//template string
//ES6 / ES2015 : ECMASCRIPT 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);



///// FILE system module

const fs = require(`fs`);

const files = fs.readdirSync(`./`)
console.log(files);

fs.readdir(`./`, function(err, files){
    if (err) console.log(`Error`, err);
    else console.log(`Result`, files);
});