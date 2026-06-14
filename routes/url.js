const express= require('express');

const {createShortURL , getOriginalURL, getAnalytics, deleteURL} = require('../controllers/url');

const router = express.Router();

router.post('/', createShortURL);
router.get('/:shortID', getOriginalURL);
router.get('/analytics/:shortID', getAnalytics);
router.post('/delete/:id' , deleteURL);

module.exports = router;