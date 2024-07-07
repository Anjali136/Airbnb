const category=require('../../model/category.model')
const categories=require('../../data/category');
const addCategorytoDb=async(req,res)=>{
    try{
        await category.deleteMany({});
        const hotelsinDB=await category.insertMany(categories.data);
        res.json(hotelsinDB)
    }catch(err){
        console.log(err);
        res.json({message:"could not add categories to DB"})
    }
}
module.exports=addCategorytoDb;