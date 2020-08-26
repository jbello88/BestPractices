const mongoose = require("mongoose");
const CommentSchema = require("./comment.model");
const RatingSchema = require("./rating.model");
const ElementSchema = require("./element.model");

//simple schema
const schema = new mongoose.Schema({
  subject: {
    type: String,
  },
  slug: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  comments: {
    type: [CommentSchema],
  },
  ratings: {
    type: [RatingSchema],
  },
  elements: {
    type: [ElementSchema],
  },
});

const p = mongoose.model("page", schema);

exports.Page = p;
