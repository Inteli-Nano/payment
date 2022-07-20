const Auth = require("mongoose").model("auth");
const config = require("../configs");
const bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  newauth = new Auth(req.body);
  Auth.findOne({ email: newauth.email })
    .then((result) => {
      if (result) {
        res.status(400).json({ message: "Already registered." });
     } else {
        newauth.password = bcrypt.hashSync(req.body.password, 10);
        newauth.save().then((response) => {
          if (response)
            res.status(200).json({ message: "Successfully", doc: response });
        });
      }
    })
    .catch((err) => {
      err.status(500).json({ message: "Error" });
    });
};

exports.login = (req, res) => {
  Auth.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json({
            message: "Successfully",
            doc: user
          });
        } else {
          res.status(400).json({
            message: "Password not match"
          })
        }
      } else {
        res.status(400).json({ message: "Unregistered user" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to connet server" });
    });
};

exports.profile = (req, res) => {
  Auth.findOne({ _id: req.body._id }).then((result) => {
    if (result)
      Auth.findByIdAndUpdate(
        {
          _id: req.body._id,
        },
        req.body,
        { new: true }
      )
        .then((result1) => {
          return res.status(200).json({
            message: "Successfully update your profile",
            docs: result1,
          });
        })
        .catch((err) => res.status(500).json({ message: "Failed to updated" }));
  });
};

exports.getinfo = (req, res) => {
  Auth.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
          res.status(200).json({
            message: "Successfully",
            doc: user
          })
      } else {
        res.status(400).json({ message: "Unregistered user" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to connet server" });
    });
}