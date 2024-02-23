const express = require("express"); // use express.js module
const http = require("http"); // use http module

const app = express(); // create an express app

app.arguments((req, res, next) => { // request, response, next functions
    const minute = new Date().getMinutes(); // get the current minute
    if (minute % 2 === 0) {
        next(); // if the current minutes remainer of 2 equals 0, call the next function
    } else {
        res.statusCode = 403 // if the minute is odd, send an error code response
        res.end("Not authorized!!") // end the response providing a message
    }
})

app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); // send a 200 status code (which means successful) and a plain text content type
    res.end("hello world!") // end the response with a provided message
})

http.createServer(app).listen(3000); // create a server using the app and listen on port 3000 ((local host http server))