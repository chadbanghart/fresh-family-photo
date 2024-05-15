const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posterSchema = new Schema(
  {
    photoURL: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Poster", posterSchema);
