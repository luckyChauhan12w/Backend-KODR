const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://kodr-2:9J2tytTgbWIV8ATP@cluster0.ncjtbsl.mongodb.net/cosmo')
        .then(() => {
            console.log('database connected!')
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = connectDB