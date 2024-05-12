const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    reviewerName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    text: {
      type: String,
      required: true,
    },
    reviewDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const photographerSchema = new Schema(
  {
    photo: {
      type: String,
    },
    phone: {
      type: Number,
    },
    resume: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Photographer", photographerSchema);
