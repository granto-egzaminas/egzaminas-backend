const Like = require("../models/likeModel");
const Ad = require("../models/adModel");
const User = require("../models/userModel");

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

    await Ad.findByIdAndUpdate(adId, {
      $push: { like_ids: like._id },
    });

    await User.findByIdAndUpdate(userId, {
      $push: { like_ids: like._id },
    });

    return like;
  }

  async deleteLikeByUserIdAndAdId(userId, adId) {
    if (!userId || !adId) {
      throw new Error("Missing userId or adId");
    }

    const like = await Like.findOneAndDelete({
      user_id: userId,
      ad_id: adId,
    });

    if (!like) {
      throw new Error("Like not found");
    }

    await Ad.findByIdAndUpdate(adId, {
      $pull: { like_ids: like._id },
    });

    await User.findByIdAndUpdate(userId, {
      $pull: { like_ids: like._id },
    });

    return like;
  }

  async getLikesByUserId(userId) {
    if (!userId) {
      throw new Error("Missing userId");
    }

    const likes = await Like.find({ user_id: userId });

    if (!likes || likes.length === 0) {
      throw new Error("No likes found for this user");
    }
    return likes;
  }
}

module.exports = new LikeService();
