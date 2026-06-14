const User = require("../model/user");
const {v4 :uuidv4 }=require("uuid");
const { setUser } = require("../Services/auth");

const handleSignUP= async (req,res)=>{
    const {name,email,password} = req.body;

    await User.create({
        name,
        email,
        password
    });

    return res.redirect('/');
}


const handleLogin= async (req,res)=>{
    const {email,password} = req.body;
    
    const user=await User.findOne({
        email,
        password
    })

    if(!user){
        return res.render("login")
    }

    const TokenID= setUser(user);
    res.cookie("uid",TokenID);
    return res.redirect('/');
}

const handleLogout=(req,res)=>{
    res.clearCookie("uid");
    return res.redirect("/login");
}

module.exports={
    handleSignUP,
    handleLogin,
    handleLogout
}