
const jwt = require('jsonwebtoken');
const user = require('../../model/user.model'); 
const CryptoJS = require('crypto-js');

const userLogin=async(req,res)=>{
    try{
        const User = await user.findOne({ number: req.body.number });
        !user && res.status(401).json({ message: "Incorrect Mobile Number" });

        const decodedPassword = CryptoJS.AES.decrypt(User.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});

        const { password, ...rest } = User._doc;
        const accessToken = jwt.sign( {username: User.username}, process.env.ACCESS_TOKEN )

        res.json({...rest, accessToken});

    }catch(err){
        console.log(err)
    }
}
module.exports=userLogin;