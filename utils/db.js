const mongoose = require('mongoose')
require("dotenv").config();

const DB_URI = process.env.DB_URI

async function connectDB() {
    try {
        await mongoose.connect(DB_URI)
        console.log('Connected!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }