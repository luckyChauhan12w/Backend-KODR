const express = require('express');
const user = require('./models/auth.models')
const cors = require('cors');
const userRouter = require('./routes/user.routes')
const cookieParser = require("cookie-parser");


const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', userRouter)


module.exports = app