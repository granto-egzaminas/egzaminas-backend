const Comment = require("../models/commentModel");

class CommentService {
  async createComment(adId, userId, text) {
    if (!adId || !userId || !text) {
      throw new Error("Please add all info");
    }

    const comment = await Comment.create({
      ad_id: adId,
      user_id: userId,
      text: text,
    });
    return comment;
  }

  async getCommentsByAdId(adId) {
    const comments = await Comment.find({ ad_id: adId });
    if (!comments) {
      throw new Error("No comments for this ad found");
    }
    return comments;
  }

  async updateComment(commentId, updates) {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }
    if (updates.text) {
      comment.text = updates.text;
    }

    const result = await comment.save();
    return result;
  }

  async deleteComment(commentId) {
    const result = await Comment.deleteOne({ _id: commentId });
    if (result.deletedCount === 0) {
      throw new Error("Comment not found");
    }
    return result;
  }
}

module.exports = new CommentService();
