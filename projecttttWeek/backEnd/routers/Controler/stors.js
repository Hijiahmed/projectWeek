const storeModels = require("../../db/moduls/storeModels");
const userModel = require("../../db/moduls/userModel");

//
const getStore = async (req, res) => {
  try {
    const store = await storeModels.find({}).populate("user");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
};
const postStore = async (req, res) => {
  const { name, img, price } = req.body;
  const user = req.token.userId;
  const newStore = new storeModels({
    name,
    img,
    price,
    user,
  });
  try {
    const savedStore = await newStore.save();
    const store = await storeModels.find({});
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
};

//
const addComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  const userName=req.token.userName
  storeModels
    .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName} } },{
      new: true
    })
    .populate("user")
    .then((result) => {
      // console.log(result,"resulttt")
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
};
const deleteComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  const userName=req.token.userName
  storeModels
    .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment, userName} } },{
      new: true
    })
    .populate("user")
    .then((result) => {
      // console.log(result,"resulttt")
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
};

const getproduct = async (req, res)=> {
  const id = req.params.id
  try {
    const store = await storeModels.findOne({_id:id}).populate("user");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
}
//
async function addCart(req, res) {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const newCart = userModel.findOneAndUpdate({ _id: user }, { $push: { cart: id } }).populate("cart");
    res.status(201).json(newCart);
  } catch (error) {
    res.send(error);
  }
}
//
const getCart = async(req,res)=>{
  const user = req.token.userId;
  try {
    const store = await userModel.findOne({_id:user}).populate("cart");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
}
const removeCart = async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
   const newCart=await userModel.findOneAndUpdate({ _id:user }, { $pull: { cart:id } },{
      new: true
    })
    res.status(200).json(newCart)
  } catch (error) {
    res.send(error)
  }
}
//
module.exports = { getStore, postStore, addComment,getproduct,deleteComment,addCart,getCart,removeCart };
