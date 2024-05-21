const express = require("express");
const router = express.Router();

const { createAd } = require("../controllers/adController");

// /api/ads/

router.post("/", createAd);

module.exports = router;
