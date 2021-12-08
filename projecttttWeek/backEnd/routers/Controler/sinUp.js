const userModel = require("../../db/moduls/userModel");
const bcrypt = require("bcrypt");
const addUserSinUp = async (req, res) => {
  let { name, email, pass } = req.body;
  console.log({ name, email, pass });
  try {
    pass = await bcrypt.hash(pass, 10);
    const newUser = new userModel({
      name,
      email,
      pass,
      cart:[]
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { addUserSinUp };