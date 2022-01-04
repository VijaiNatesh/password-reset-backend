const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URL)
const Joi = require('joi')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = conn.model("User", UserSchema)

const validate = (User) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    return schema.validate(User)
}

module.exports = {User, validate}