const Hotel=require('../../model/hotel.model')
const hotels=require('../../data/hotels');
const addDatatoDb=async(req,res)=>{
    try{
        await Hotel.deleteMany({});
        const hotelsinDB=await Hotel.insertMany(hotels.data);
        res.json(hotelsinDB)
    }catch(err){
        console.log(err);
        res.json({message:"could not add data to DB"})
    }
}
module.exports=addDatatoDb;