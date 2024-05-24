const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommentsByAdId,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ /api/comments/

router.post("/", verifyToken, createComment);
router.get("/:adId", getCommentsByAdId);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);

module.exports = router;
