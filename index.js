const express = require("express");
const app = express();
port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from App Engine!");
});

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
