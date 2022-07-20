const auth = require("./auth");
const stripe = require("./stripe");

module.exports = (app) => {
  app.use("/api/auth", auth);
  app.use("/api/stripe", stripe);
};
