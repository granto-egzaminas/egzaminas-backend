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

router.post("/", verifyToken, createLike);
router.delete("/", verifyToken, deleteLikeByUserIdAndAdId);
router.get("/", verifyToken, getLikesByUserId);

module.exports = router;
