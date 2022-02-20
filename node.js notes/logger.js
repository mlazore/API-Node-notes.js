// (function (exports, require, module, _filename, _dirname){

    console.log(__filename);
    console.log(__dirname);

var url = `http//mylogger.io/log`;

function log(message) {
    //send an HTTP request
    console.log(message);
}

module.exports = log;

// })

//exports = log; == module.exports
// load a module use the require function 

