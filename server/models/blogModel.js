const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    Name: String,
    Heading: String,
    Content: String
}, {timestamps: true})

module.exports = mongoose.model('blogs', blogSchema)