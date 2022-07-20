const express = require("express");
const router = express.Router();
const ctrAuth = require("../controllers/auth");

router.post("/signup", ctrAuth.signup);
router.post("/login", ctrAuth.login);
router.put("/profile", ctrAuth.profile);
router.post("/getinfo", ctrAuth.getinfo);

module.exports = router;
