const mongoose = require('mongoose');

const connectDB = async (LINK) => {
    await mongoose.connect(LINK);
    console.log('Connected to MongoDB');
};

module.exports = {
    connectDB
};