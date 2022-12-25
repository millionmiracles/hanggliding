const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "static");

app.use(express.static(publicPath));

app.get("*", (req, res) => res.send(path.join(publicPath, "index.html")));

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
