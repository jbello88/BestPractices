const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElementSchema = new Schema(
  {
    title: { type: String, max: 200 },
    text: { type: String, max: 2000 },
    url: { type: String, max: 200 },
    type: { type: String, max: 2 },
    order: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = ElementSchema;
