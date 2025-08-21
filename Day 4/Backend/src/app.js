const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model');

// it is used to read files because express.json() can't able to read files 
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

app.use(express.json());

app.post('/posts', upload.single('mama'), async (req, res) => {
    const image = req.file.buffer
    const caption = req.body.caption
    const result = await uploadFile(image, "test") // quid ka use krke unique name generate krna hai
    console.log(result)

    const post = await postModel.create({
        caption: caption,
        url: result.url
    })

    res.json({
        message: "Post created successfully",
        post: post
    })
})

app.get('/posts', async (req, res) => {
    const allPost = await postModel.find();
    res.send(allPost)
})

module.exports = app;

