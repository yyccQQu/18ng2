"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end('hello_server');
});
server.listen(8000);
