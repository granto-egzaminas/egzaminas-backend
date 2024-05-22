const express = require("express");
const router = express.Router();

const {
  createLike,
  deleteLikeByUserIdAndAdId,
} = require("../controllers/likeController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ /api/likes/

router.post("/", verifyToken, createLike);
router.delete("/", verifyToken, deleteLikeByUserIdAndAdId);

module.exports = router;
