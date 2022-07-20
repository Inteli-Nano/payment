const config = require("./../configs/db");
const mongoose = require("mongoose");

module.exports = () => {
  require("./../models/authModel");
  require("./../models/stripeModel");
  return mongoose.connect(config.mongoURL, {
    autoIndex: true,
  });
};
