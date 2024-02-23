const express = require("express"); // means this will be saved on a variable called express 
const path = require("path"); // means this will be saved on a variable called path
const http = require("http"); // means this will be saved on a variable called http


// then create an app

const app = express(); // assigned the express module to the app variable so that we can use the express module to create an app
// we need the app so that we can use the app to create a server


// homepage:
app.get("/", (req, res) => {
    res.end("Welcome to the homepage!") // end the response with a provided message
})

// about page:
app.get("/about", (req, res) => {
    res.end("Welcome to the about page!") // end the response with a provided message
});

// contact page:
app.get("/contacts", (req,res) => {
    res.end("Welcome to the contacts page!") // end the response with a provided message
})

// linking inputs:
app.get("/hello/:who", (req, res) => { // who variable is a parameter that will be passed to the request object
    res.end("Hello, " + req.params.who + ".") // end the response with a provided message == "Hello Lee."
})

// creating/sending text note:
app.get("/sendnote", (req, res) => {
    const filePath = path.resolve(_dirname, "notes.txt") // this is a method that resolves a sequence of paths or path segments into an absolute path 
    res.sendFile(filePath) // send the file from the const path
})

// if doesnt work:
app.arguments((req, res) => {
    res.statusCode = 404 // if the minute is odd, send an error code response
    res.end("404: Not Found") // end the response providing a message
})

http.createServer(app).listen(3000); // create a server using the app and listen on port 3000 ((local host http server))