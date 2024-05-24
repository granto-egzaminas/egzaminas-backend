/** @format */

// routes/adRoutes.js

const express = require("express");
const router = express.Router();

const {
  createAd,
  getAllAds,
  getAdById,
  getAdsByUserId,
  updateAd,
  deleteAd,
  blockAd,
} = require("../controllers/adController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ /api/ads/

router.post("/", verifyToken, createAd);
router.get("/", getAllAds);
router.get("/:id", verifyToken, getAdById);
router.put("/:id", verifyToken, updateAd);
router.delete("/:id", verifyToken, deleteAd);
router.patch("/block/:id", verifyToken, checkAdminRole, blockAd); // New route for blocking ads
router.get("/user/:id", verifyToken, getAdsByUserId);

module.exports = router;
