const wishlist = require('../../model/wishlist.model'); 

const showWishlist=async(req,res)=>
{
try{
const Wishlist=await wishlist.find({});
Wishlist?res.json(Wishlist):res.json({message:"no items found in wishlist"});
}catch(err)
{
    console.log(err)
res.status(500).json(err)

}
}
module.exports=showWishlist;