const express = require("express");
const router = express.Router();

const {
  createFavorite,
  deleteFavoriteByUserIdAndAdId,
  getFavoritesByUserId,
  getFavoritesByAdId,
  checkIfAdIsFavoritedByUser,
} = require("../controllers/favoriteController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ /api/favorites/

router.post("/ad/:id", verifyToken, createFavorite);
router.delete("/ad/:id", verifyToken, deleteFavoriteByUserIdAndAdId);
router.get("/ad/:id", getFavoritesByAdId);
router.get("/ad/:id/isFavorited", verifyToken, checkIfAdIsFavoritedByUser);
router.get("/", verifyToken, getFavoritesByUserId);

module.exports = router;
