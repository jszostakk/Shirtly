const mongoose = require('mongoose');

const Entry = mongoose.model('Entry',{
    title: String,
    description: String,
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

module.exports = Entry;