require("dotenv").config();

const express = require('express');
const URL = require('./model/database');
const path = require('path');

const cookieParser=require("cookie-parser");


const {connectDB} = require('./connectivity');

const urlRoutes = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRouter=require('./routes/user');
const {userAuthentication, restrictTo } = require('./middleware/auth');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(userAuthentication);

connectDB(process.env.MONGO_URL);

app.use('/url', restrictTo(["NORMAL","ADMIN"]) ,urlRoutes);
app.use('/user', userRouter)
app.use('/', staticRouter);

app.set("view engine", "ejs");
app.set('views',path.resolve('./views'));

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});
