const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username: {type: String, required: true},
    number: {type: Number, required: true,uniquie:true },
    email: {type: String, required: true,uniquie:true },
    password: {type: String, required: true},
})
const user=mongoose.model("user",userSchema);
module.exports=user;
