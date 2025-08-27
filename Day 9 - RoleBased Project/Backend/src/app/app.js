const express = require('express');
const router = require('../routes/user.routes')
const app = express()


app.use(express.json());

app.use('/api/users', router);


module.exports = app

