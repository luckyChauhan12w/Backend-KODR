const mongoose = require('mongoose');

function connectdb() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('database connected')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connectdb