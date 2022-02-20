const express = require("express");
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {res.send("Hello world")});

const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
    console.info(
      `Te project is runing at ${HOST}:${PORT}`
    );
  });