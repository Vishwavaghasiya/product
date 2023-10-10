const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { dbConnection } = require("./src/db/dbConnection");
const routes = require("./src/routes/v1");
const port = 8030;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not found !"))
});

const server = http.createServer(app);

dbConnection();

server.listen(port, () => {
  console.log("Server listning on port " + port);
});