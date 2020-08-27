const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    content: { type: String, min: 8, max: 1000, required: true },
    by: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = CommentSchema;
