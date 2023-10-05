require("reflect-metadata");
const express = require("express");
const { AppDataSource } = require("./data-source");
const app = express();
port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from App Engine!");
});

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});

const main = async () => {
  await AppDataSource.connect();
  console.log("Connected to database");
};
main();
