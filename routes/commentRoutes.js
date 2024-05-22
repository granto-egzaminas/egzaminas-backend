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

router.post("/", createComment);
router.get("/:adId", getCommentsByAdId);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
