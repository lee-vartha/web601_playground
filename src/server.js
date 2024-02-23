const express = require("express");
const http = require("http");

const app = express();


http.createServer(app).listen(3000); // create a server using the app and listen on port 3000 ((local host http server))