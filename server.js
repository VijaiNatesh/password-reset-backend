require('dotenv').config()
const express = require('express')
const app = express()
require('./config/dbConnect')();
const cors = require('cors')
const userRoute = require("./routes/userRoute")
const passwordResetRoute = require("./routes/passwordReset")

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Password Reset Api")
})
app.use('/api/user', userRoute)
app.use('/api/passwordreset', passwordResetRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})