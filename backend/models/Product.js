const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name:String,
  email:String,
  course:String
});

module.exports = mongoose.model("Product",ProductSchema);