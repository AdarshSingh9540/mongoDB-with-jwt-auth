const {key} = require('../key')
const jwt = require('jsonwebtoken')

function adminMiddleware (req,res,next){

    const token = req.headers.authorization;
    // const words = token.spilt(" ");
    // const jwtToken = words[1];

   try{
    const decodedValue = jwt.verify(token,key);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }
   }catch(e){
    res.json({
        msg:"Incorrect details Try again"
    })
   }

}


module.exports = adminMiddleware;