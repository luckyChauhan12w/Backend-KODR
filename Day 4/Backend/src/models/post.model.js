const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    caption: String,
    url: String
})


const postModel = mongoose.model('Post', postSchema)

module.exports = postModel;