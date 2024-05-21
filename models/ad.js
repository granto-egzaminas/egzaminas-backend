const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
    required: true,
  },
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
});
