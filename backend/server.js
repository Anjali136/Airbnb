  const express=require('express');
  const mongoose=require('mongoose');
  const hotelRouter=require('./routes/HotelRoute');
  const wishListRoute=require('./routes/wishListRoute');
  const categoryRouter=require('./routes/HotelRoute');
  const connectDB=require("./config/dbconfig");
  const cors=require('cors');
  const app=express();

  app.use(cors())
  app.use(express.json());
  connectDB();
  app.use('/api',hotelRouter);
  app.use('/api',categoryRouter);
  app.use('/api',wishListRoute);
 
  const PORT=8000;

  app.get("/",(req,res)=>{
    res.send("helloooooooooooooooooooooo")
  })  
 
  mongoose.connection.once("open",()=>{
    console.log("connected to db");
  app.listen(PORT,()=>{ 
  console.log("server is listening");
  });  
})                                        