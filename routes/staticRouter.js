const express = require('express');
const URL = require('../model/database');
const { restrictTo } = require('../middleware/auth');
const router = express.Router();

router.get('/admin/users', restrictTo(["ADMIN"]), async (req, res) => {
    const allUrls = await URL.find({});
    res.render("home", {
        shortID: req.query.shortID,
        urls: allUrls
    });
});

router.get('/', restrictTo(["NORMAL","ADMIN"]), async (req, res) => {

    const allurls = await URL.find({
        createdBy: req.user._id
    });

    res.render('home', {
        shortID: req.query.shortID,
        urls: allurls
    });
});

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

module.exports = router;