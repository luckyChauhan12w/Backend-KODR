const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect('mongodb+srv://kodr-2:<password>@cluster0.ncjtbsl.mongodb.net/cosmo')
        .then(() => {
            console.log('connected to mongodb')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connectDB