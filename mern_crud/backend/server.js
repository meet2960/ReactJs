const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Api Running");
});

const PORT = 4000;

app.listen(PORT);
