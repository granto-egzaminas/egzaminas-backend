const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  like_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like",
  },
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});

module.exports = mongoose.model("Ad", adSchema);
