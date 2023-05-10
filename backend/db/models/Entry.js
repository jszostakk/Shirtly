const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: String,
    likes: Number,
    dislikes: Number,
    comments: [{
        owner: String,
        description: String,
        likes: Number,
        dislikes: Number
    }]
})

const Entry = mongoose.model('Entry', EntrySchema)

module.exports = Entry;