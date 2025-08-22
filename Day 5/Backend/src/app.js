const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');


// it is used to read files because express.json() can't able to read files 
const upload = multer({ storage: multer.memoryStorage() });



const app = express();
app.use(cors());

app.use(express.json());

app.post('/posts', upload.single('mama'), async (req, res) => {

    const image = req.file.buffer
    const caption = req.body.caption
    const result = await uploadFile(image, uuidv4()) // uuid ka use krke unique name generate krna hai

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

