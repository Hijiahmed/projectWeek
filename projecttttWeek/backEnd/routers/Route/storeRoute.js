const express = require("express");
const StoreRoute = express.Router();

const { getStore, postStore, addComment,getproduct,deleteComment,addCart ,getCart,removeCart} = require("../Controler/stors");
const { authentication } = require("../midlleWare/authentication");

StoreRoute.get("/store", authentication, getStore);
StoreRoute.post("/store", authentication, postStore);


StoreRoute.get("/product/:id",authentication, getproduct);
StoreRoute.post("/comment/:id", authentication, addComment);
StoreRoute.put("/comment/:id", authentication, deleteComment);

StoreRoute.post("/cart/:id", authentication, addCart);
StoreRoute.delete("/cart/:id",authentication,removeCart)
StoreRoute.get("/cart/:id", authentication, getCart);



module.exports = StoreRoute;
