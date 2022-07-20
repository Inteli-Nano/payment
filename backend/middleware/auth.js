const passport = require("passport");

const auth = {
  required: passport.authenticate("jwt", { session: false }),
  optional: function (req, res, next) {
    next();
  },
};
module.exports = auth;
