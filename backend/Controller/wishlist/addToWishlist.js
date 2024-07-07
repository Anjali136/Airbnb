const wishlist = require('../../model/wishlist.model'); 


const addToWishlist=async(req,res)=>
{
const newWishlist=new wishlist(req.body);
try{
const savedWishlist=await newWishlist.save();
res.status(201).json(savedWishlist);

}catch(err)
{
res.status(500).json({message:"failed to add to wishlist"})

}
}
module.exports=addToWishlist;