const wishlist = require('../../model/wishlist.model'); 
const deleteItems=async(req,res)=>
{
    try{
   
    await wishlist.findByIdAndDelete(req.params.id);
  res.json({message:"hotel deleted from whislisy"});
    }catch(err){
        res.status(500).json({message:"could not delete"})    
    }
}
module.exports=deleteItems;