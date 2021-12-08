const Mongoose = require("mongoose");
const userModel = new Mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },
  cart:[{type:Mongoose.Schema.Types.ObjectId, ref: "storeModels"}]

});
module.exports = Mongoose.model("userModel", userModel);
