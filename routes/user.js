const express=require("express");
const { handleSignUP, handleLogin, handleLogout} = require("../controllers/user.js");

const router = express.Router();

router.post('/', handleSignUP)
router.post('/login',handleLogin)
router.get('/logout',handleLogout)

module.exports=router;