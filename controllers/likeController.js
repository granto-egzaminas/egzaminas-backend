const asyncHandler = require("express-async-handler");

const likeService = require("../services/likeService");

const createLike = asyncHandler(async (req, res) => {
  const adId = req.params.id;
  const userId = req.user.id;

  try {
    const like = await likeService.createLike(userId, adId);
    res.status(201).json({ message: "Like created successfully", like });
  } catch (error) {
    res.status(400).json({ error: "Like creation failed: " + error.message });
  }
});

const deleteLikeByUserIdAndAdId = asyncHandler(async (req, res) => {
  const adId = req.params.id;
  const userId = req.user.id;

  try {
    const like = await likeService.deleteLikeByUserIdAndAdId(userId, adId);
    res.status(200).json({ message: "Like deleted successfully", like });
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

const getLikesByAdId = asyncHandler(async (req, res) => {
  const adId = req.params.id;
  try {
    const likes = await likeService.getLikesByAdId(adId);
    res.status(200).json({ message: "Ad likes retrieved successfully", likes });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Ad likes retrieval failed: " + error.message });
  }
});

const checkIfAdIsLikedByUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const adId = req.params.id;
  try {
    const isLiked = await likeService.checkIfAdIsLikedByUser(userId, adId);
    res
      .status(200)
      .json({ message: "Like check result retrieved successfully", isLiked });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Like check result retrieval failed: " + error.message });
  }
});

module.exports = {
  createLike,
  deleteLikeByUserIdAndAdId,
  getLikesByUserId,
  getLikesByAdId,
  checkIfAdIsLikedByUser,
};
