const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path');

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
  app.use(express.static(path.resolve(__dirname, '../../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
  });

  require("../routes")(app);
  
  return app;
};
