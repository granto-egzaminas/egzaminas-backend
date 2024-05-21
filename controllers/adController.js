const asyncHandler = require("express-async-handler");

const adService = require("../services/adService");

const createAd = asyncHandler(async (req, res) => {
  const { image, price, description, categoryId } = req.body;
  const userId = req.user.id;

  try {
    const ad = await adService.createAd(
      image,
      price,
      description,
      categoryId,
      userId
    );
    res.status(201).json({ message: "Ad created successfully", ad });
  } catch (error) {
    res.status(400).json({ error: "Ad creation failed: " + error.message });
  }
});

module.exports = { createAd };
