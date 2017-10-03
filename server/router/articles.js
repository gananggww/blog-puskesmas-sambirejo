const express = require('express')
const router = express.Router()
const articles = require('../controller/articles')
const jwt = require('jsonwebtoken')

const midjwt = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "satejeroan")
    console.log('==============================',decoded);
    req.headers.auth = decoded
    console.log("===============>", req.headers.auth);
    next()
  }
  else {
    res.send("maaf anda harus login")
  }
}


router.get('/', midjwt, articles.allById)
router.delete('/:id', midjwt, articles.lost)
// router.put('/:id', midjwt, articles.update)
router.post('/', midjwt, articles.insert)

module.exports = router
