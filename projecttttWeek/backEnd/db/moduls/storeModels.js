const mongoose = require("mongoose");

const storeModels = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  price: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  comment:{type:Array},

});

module.exports = mongoose.model("storeModels", storeModels);
