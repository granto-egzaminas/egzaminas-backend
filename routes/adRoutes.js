const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/authMiddleware");

const {
  createAd,
  getAllAds,
  getAdById,
  getAdsByUserId,
  updateAd,
  deleteAd,
} = require("../controllers/adController");

// @ /api/ads/

router.post("/", createAd);
router.get("/", getAllAds);
router.get("/:id", getAdById);
router.put("/:id", updateAd);
router.delete("/:id", deleteAd);
router.get("/user/:id", getAdsByUserId);
module.exports = router;
