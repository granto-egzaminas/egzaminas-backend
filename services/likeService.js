const Like = require("../models/likeModel");

class LikeService {
  async createLike(userId, adId) {
    if (!userId || !adId) {
      throw new Error("Missing userId or adId");
    }

    const existingLike = await Like.findOne({ user_id: userId, ad_id: adId });
    if (existingLike) {
      throw new Error("Like already exists");
    }

    const like = await Like.create({
      user_id: userId,
      ad_id: adId,
    });
    return like;
  }

  async deleteLikeByUserIdAndAdId(userId, adId) {
    if (!userId || !adId) {
      throw new Error("Missing userId or adId");
    }

    const result = await Like.deleteOne({
      user_id: userId,
      ad_id: adId,
    });

    if (result.deletedCount === 0) {
      throw new Error("Like not found");
    }

    return result;
  }

  async getLikesByUserId(userId) {
    if (!userId) {
      throw new Error("Missing userId");
    }

    const likes = await Like.find({ user_id: userId });

    if (!likes) {
      throw new Error("No likes found for this user not found");
    }
    return likes;
  }
}

module.exports = new LikeService();
