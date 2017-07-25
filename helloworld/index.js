/* Hello World! program in Node.js */

"use strict";

// required module
var mhttp = require("http");

// variables
var iPort = 8082;
var sMessage = "Hello world!";
var oResponse = {
    "returnCode": "1",
    "returnMessage": "everything OK",
    "returnData": null
}

// create Http server
var oServer = mhttp.createServer(function(req, res){
    console.log("\r\nRequest received");
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.write(JSON.stringify(oResponse)) ;
    res.end();
    console.log("Response sent!");

});
oServer.listen(iPort);


console.log('server running at http://127.0.0.1:' + iPort + '/');

