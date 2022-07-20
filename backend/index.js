const express = require("./app/libs/express");
const mongoose = require("./app/libs/mongoose");
const http = require("http");

const config = require("./app/configs");

mongoose()
  .then(() => {
    const app = express();
    const server = http.createServer(app).listen(config.SERVER.PORT, () => {
      console.log(`Http SERVER is running at port ${config.SERVER.PORT}`);
      console.log(`Please visit http://127.0.0.1: ${config.SERVER.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Running server was failed, Fiexed it");
  });
