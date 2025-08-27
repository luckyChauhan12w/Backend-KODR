const userModel = require('../models/user.models')

async function registerUser(req, res) {

    const { username, fullName: { firstName, lastName }, email, password } = req.body

    const isUserExist = userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserExist) {
        return req.status(422).json({
            message: "User already Exist"
        })
    }

    const user = await userModel.create({
        username: username,
        fullName: {
            firstName: firstName,
            lastName: lastName,
        },
        email: email,
        password: password
    })

    console.log(user)

    res.send('hello user');
}
function getUsers() {

}

module.exports = { registerUser, getUsers };