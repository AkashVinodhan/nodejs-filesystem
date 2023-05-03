const fs = require("fs");

const express = require("express");
const app = express();

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

//* API endpoint to create a file in testFolder

app.post("/createfile", (req, res) => {
  let d = new Date();
  let filename = `${d.getDay()}-${
    d.getMonth() + 1
  }-${d.getFullYear()} - ${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
  let content = `${d.getDay()}/${
    d.getMonth() + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  fs.writeFile(`./testFolder/${filename}.txt`, content, () => {
    console.log("File Created by api");
  });
  res.send("File Created in testFolder");
});

//* API endpoint to read files in testFolder

app.get("/readfiles", (req, res) => {
  fs.readdir("./testFolder", (err, files) => {
    if (err) console.log(err);
    res.send(files);
  });
});
