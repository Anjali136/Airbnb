const category=require('../../model/category.model');
const getcategory=async(req,res)=>
{
    try{
  let categories
    categories=await category.find({});
  res.json(categories);
    }catch(err){
        res.status(404).json({message:"no categories found "})    
    }
}
module.exports=getcategory;