const asyncHandler = require("express-async-handler");

const likeService = require("../services/likeService");

const createLike = asyncHandler(async (req, res) => {
  const { adId } = req.body;
  const userId = req.user.id;

  try {
    const like = await likeService.createLike(userId, adId);
    res.status(201).json({ message: "Like created successfully", like });
  } catch (error) {
    res.status(400).json({ error: "Like creation failed: " + error.message });
  }
});

const deleteLikeByUserIdAndAdId = asyncHandler(async (req, res) => {
  const { adId } = req.body;
  const userId = req.user.id;

  try {
    const result = await likeService.deleteLikeByUserIdAndAdId(userId, adId);
    res.status(200).json({ message: "Like deleted successfully", result });
  } catch (error) {
    res.status(400).json({ error: "Like deletion failed: " + error.message });
  }
});

const getLikesByUserId = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  try {
    const likes = await likeService.getLikesByUserId(userId);
    res
      .status(200)
      .json({ message: "User likes retrieved successfully", likes });
  } catch (error) {
    res
      .status(400)
      .json({ error: "User likes retrieval failed: " + error.message });
  }
});

module.exports = { createLike, deleteLikeByUserIdAndAdId, getLikesByUserId };
