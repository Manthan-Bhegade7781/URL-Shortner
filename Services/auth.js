const jwt= require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const setUser =(user)=>{
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    },secret)
}

const getUser =(Token)=>{
    if(!Token) return null

    try {
        return jwt.verify(Token , secret);
    } catch (error) {
        return null
    }
    
}

module.exports={
    setUser,
    getUser
}