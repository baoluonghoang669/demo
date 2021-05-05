const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();

app.use("/index", serveStatic(path.join(__dirname, "/dist")));

const port = 8080;
app.listen(port);
console.log(`app is listening on port ${port}`);