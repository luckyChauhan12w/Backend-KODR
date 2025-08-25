const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user