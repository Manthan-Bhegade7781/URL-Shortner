const shortid = require('shortid');

const URL = require('../model/database');

const createShortURL = async (req, res) => {
    const body = req.body;
    const shortURL = shortid();

    if(!body.url){
        return res.redirect('/');
    }

    // Check duplicate URL
    const existingURL = await URL.findOne({
        originalURL: body.url,
        createdBy: req.user._id,
    });

    // If already exists
    if (existingURL) {
        return res.redirect(`/?shortID=${existingURL.shortID}`);
    }
    
    await URL.create({
        shortID: shortURL,
        originalURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.redirect(`/?shortID=${shortURL}`);
};

const getOriginalURL = async (req, res) => {
    const shortID = req.params.shortID;
    
    const urlDoc = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        }
    });
    res.redirect(urlDoc.originalURL);
};

const getAnalytics = async (req, res) => {
    const shortID = req.params.shortID;
    const result = await URL.findOne({
        shortID
    });

    return res.status(200).json({
        success: true,
        message: 'Analytics retrieved successfully',
        data: {
            visitCount: result.visitHistory.length,
            visitHistory: result.visitHistory
        }
    });
};

const deleteURL= async (req,res)=>{
    await URL.findOneAndDelete({
        _id: req.params.id,
        createdBy: req.user._id,
    });

    return res.redirect("/");
}

module.exports = {
    createShortURL,
    getOriginalURL,
    getAnalytics,
    deleteURL
};