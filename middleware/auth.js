const {getUser}= require('../Services/auth');

//this is for Authentication purpose
const userAuthentication=(req,res,next)=>{
    req.user=null;
    const token= req.cookies?.uid;

    if(!token) return next();

    const user= getUser(token);
    req.user=user;
    return next();
}

//this is for Authorization Purpose
const restrictTo=(roles)=>{
    return function(req,res,next){
        if(!req.user) return res.redirect("/login");

        if(!roles.includes(req.user.role)) return res.end("UnAuthorized");

        return next();
    }
}


module.exports={
    userAuthentication,
    restrictTo
}