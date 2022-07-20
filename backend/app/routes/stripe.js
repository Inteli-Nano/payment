const express = require("express");
const router = express.Router();
const stripSubscription = require("./../controllers/stripSubscription");

router.post("/create-payment-intent", stripSubscription.stripSub);
router.get("/history", stripSubscription.history);
router.post("/subscript", stripSubscription.subscript);

module.exports = router;
