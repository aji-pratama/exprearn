const express = require('express')
const router = express.Router()
const Book = require('../models/book')


router.get('/', async(req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.json(book)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        active: req.body.active
    })

    try {
        const bookObj = await book.save()
        res.json(bookObj)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updateBook = await Book.updateOne(
            {_id: req.params.id},
            {$set: {
                title: req.body.title,
                description: req.body.description,
                active: req.body.active
            }
        });
        res.json(updateBook)
    } catch (err) {
        res.send('Error ' + err)
    }
})

module.exports = router
