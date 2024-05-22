const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/authMiddleware");

const {
  createComment,
  getCommentsByAdId,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// @ /api/comments/

router.post("/", verifyToken, createComment);
router.get("/:adId", getCommentsByAdId);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);

module.exports = router;
