const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const http = require("http");
app.use(serveStatic(path.join(__dirname + "/dist/")));
// app.get(/.*/, function(req, res) {
//     res.sendfile(path.join(__dirname, "/dist/index.html"));
// });
setInterval(function() {
    http.get(/.*/, function(req, res) {
        res.sendfile(path.join(__dirname, "/dist/index.html"));
    });
}, 300000);
app.listen(port);

console.log("Server started...");