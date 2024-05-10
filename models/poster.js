const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posterSchema = new Schema(
  {
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Poster", posterSchema);
