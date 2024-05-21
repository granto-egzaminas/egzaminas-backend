const Ad = require("../models/adModel");
const Category = require("../models/categoryModel");

class AdService {
  async createAd(image, price, description, categoryId, userId) {
    if (!image || !price || !description || !categoryId || !userId) {
      throw new Error("Please fill all fields");
    }
    const categoryExists = await Category.findById({ _id: categoryId });
    if (!categoryExists) {
      throw new Error("The category does not exist");
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
}

module.exports = new AdService();
