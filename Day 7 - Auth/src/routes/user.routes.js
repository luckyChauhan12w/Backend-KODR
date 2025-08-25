const express = require('express')
const userModel = require('../models/auth.models')
const jwt = require('jsonwebtoken');

const router = express.Router()

router.post('/register', async (req, res) => {

    try {

        const { username, fullName: { firstName, lastName }, email, password } = req.body


        const isUserExist = await userModel.findOne({
            $or: [{ username }, { email }]

        })

        console.log(isUserExist)

        if (isUserExist) {
            return res.status(422).json({
                success: false,
                message: "❌ Username or Email already exists"
            })
        }

        const user = await userModel.create({
            username,
            fullName: {
                firstName,
                lastName
            },
            email,
            password
        })


        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.cookie("token", token)

        res.status(201).json({
            success: true,
            message: 'User succesfully registered',
            token,
            user: user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "❌ Error registering user",
            error: err.message
        })
    }

})


router.get('/user', (req, res) => {
    const token = req.cookies.token

    console.log(token)
})


module.exports = router