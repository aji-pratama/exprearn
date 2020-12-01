const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Book', bookSchema)
