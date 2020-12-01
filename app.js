const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BookDB'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected')
})

app.use(express.json())

const bookRoutes = require('./routes/books')
app.use('/book', bookRoutes)

app.listen(9000, function(){
    console.log('Server Started')
})
