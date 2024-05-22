const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/authMiddleware");

const {
  createLike,
  deleteLikeByUserIdAndAdId,
} = require("../controllers/likeController");

// @ /api/likes/

router.post("/", verifyToken, createLike);
router.delete("/", verifyToken, deleteLikeByUserIdAndAdId);

module.exports = router;
