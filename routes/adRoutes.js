const express = require("express");
const router = express.Router();

const { createAd } = require("../controllers/adController");
const { verifyToken } = require("../middleware/authMiddleware");

// /api/ads/

router.post("/", verifyToken, createAd);

module.exports = router;
