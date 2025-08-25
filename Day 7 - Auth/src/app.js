const express = require('express');
const user = require('./models/auth.models')
const userRouter = require('./routes/user.routes')

const app = express()
app.use(express.json());

app.use('/api/auth', userRouter)


module.exports = app