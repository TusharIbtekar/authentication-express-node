import express from "express";
import routes from "./routes/base.route";

require("reflect-metadata");
const app = express();
app.use(express.json());
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
