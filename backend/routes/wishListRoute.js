const express=require('express');

const wishListRoute=express.Router();

const addToWishlist=require("../Controller/wishlist/addToWishlist");
const deleteItems=require("../Controller/wishlist/deleteItemsWish");
const showWishlist=require("../Controller/wishlist/showWhislist");

wishListRoute.post('/wishlist',addToWishlist);
wishListRoute.delete('/wishlist/:id',deleteItems);
wishListRoute.get('/wishlist/show',showWishlist);

module.exports=wishListRoute;