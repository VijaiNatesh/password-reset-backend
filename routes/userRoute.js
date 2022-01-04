const {User, validate} = require("../models/User")
const express = require('express')
const userRoute = express.Router()

userRoute.post('/', async(req, res) => {
    try{
        const {error} = validate(req.body)
        if (error) return res.status(400).send(error.details[0].message);
        const user = await User.create(req.body)
        user.save()
        res.json(user)
    }
    catch(error){
        res.send("An error Occured")
        console.log(error)
    }
})

module.exports = userRoute