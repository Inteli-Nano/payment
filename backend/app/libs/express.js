const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

module.exports = () => {
  const app = express();
  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 1000,
    })
  );
  require("../routes")(app);
  return app;
};
