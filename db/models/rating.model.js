const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
  {
    stars: { type: Number, min: 0, max: 10, required: true },
    by: { type: String, required: true },

    // Object Id to be added
  },
  {
    timestamps: true,
  }
);

module.exports = RatingSchema;
