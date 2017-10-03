const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost/blog', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const users = require('./router/users')
const articles = require('./router/articles')

app.use('/users', users)
app.use('/articles', articles)

app.listen(3000, () => {
  console.log('lagi dengerin 3000 nih');
})
