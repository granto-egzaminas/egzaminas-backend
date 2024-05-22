const Ad = require("../models/adModel");
const Category = require("../models/categoryModel");

class AdService {
  async createAd(image, price, description, categoryId, userId) {
    if (!image || !price || !description || !categoryId || !userId) {
      throw new Error("Please add all info");
    }
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new Error("This category does not exist in the database");
    }

    const ad = await Ad.create({
      image: image,
      price: price,
      description: description,
      category_id: categoryId,
      user_id: userId,
    });
    return ad;
  }

  async getAllAds() {
    const ads = await Ad.find();
    return ads;
  }
  async getAdById(adId) {
    const ad = await Ad.findById(adId);

    if (!ad) {
      throw new Error("Ad not found");
    }
    return ad;
  }

  async getAdsByUserId(userId) {
    const ads = await Ad.find({ user_id: userId });
    return ads;
  }

  async updateAd(adId, updates) {
    const ad = await Ad.findById(adId);
    if (!ad) {
      throw new Error("Ad not found");
    }

    if (updates.image) {
      ad.image = updates.image;
    }

    if (updates.price) {
      ad.price = updates.price;
    }

    if (updates.description) {
      ad.description = updates.description;
    }

    if (updates.category_id) {
      ad.category_id = updates.category_id;
    }

    const result = await ad.save();

    return result;
  }

  async deleteAd(adId) {
    const result = await Ad.deleteOne({ _id: adId });
    if (result.deletedCount === 0) {
      throw new Error("Ad not found");
    }
    return result;
  }
}

module.exports = new AdService();