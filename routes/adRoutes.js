/** @format */

// routes/adRoutes.js

const express = require("express");
const router = express.Router();

const {
  createAd,
  getAllAds,
  getAdById,
  getAdsByUserId,
  getUsersFavoriteAds,
  updateAd,
  deleteAd,
  blockAd, // Import the controller function for blocking ads
} = require("../controllers/adController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ /api/ads/

router.post("/", verifyToken, createAd);
router.get("/", getAllAds);
router.get("/:id", verifyToken, getAdById);
router.put("/:id", verifyToken, updateAd);
router.delete("/:id", verifyToken, deleteAd);
router.patch("/block/:id", verifyToken, checkAdminRole, blockAd); // Use PATCH for blocking ads
router.get("/user/:id", verifyToken, getAdsByUserId);
router.get("/favorites/user/:id", verifyToken, getUsersFavoriteAds)

module.exports = router;
