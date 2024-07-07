const express=require('express');

const HotelRoute=express.Router();

const addDatatoDb=require('../Controller/Hotel/addDatatoDB');
const hotel=require('../Controller/Hotel/getHotel');
const addCategorytoDb = require('../Controller/Hotel/addCategorytoDB');
const singleHotelRouter=require("../Controller/Hotel/getHotelById");
const userSignup=require("../Controller/Hotel/userSignup");
const userLogin=require("../Controller/Hotel/userLogin");


HotelRoute.get('/hoteldata',addDatatoDb);
HotelRoute.get('/hotel',hotel);
HotelRoute.get('/category',addCategorytoDb);
HotelRoute.get('/hotel/:id',singleHotelRouter);
HotelRoute.post('/auth/register',userSignup);
HotelRoute.post('/auth/login',userLogin);



module.exports=HotelRoute;