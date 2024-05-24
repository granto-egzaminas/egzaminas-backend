const express = require("express");
const router = express.Router();

const {
  createLike,
  deleteLikeByUserIdAndAdId,
  getLikesByUserId,
} = require("../controllers/likeController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ /api/likes/

router.post("/ad/:id", verifyToken, createLike);
router.delete("/ad/:id", verifyToken, deleteLikeByUserIdAndAdId);
router.get("/", verifyToken, getLikesByUserId);

module.exports = router;
