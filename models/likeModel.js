const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ad_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ad",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Like", likeSchema);
