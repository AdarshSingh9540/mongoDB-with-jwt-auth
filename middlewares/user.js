const {key} = require('../key')
const jwt = require('jsonwebtoken')

function userMiddleware (req,res,next){

    const token = req.headers.authorization;
    const words = token.spilt(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken,key);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }

}


module.exports = userMiddleware;