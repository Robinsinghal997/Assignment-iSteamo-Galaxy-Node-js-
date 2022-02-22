const {getuserData} = require('./control')
const router = require('express').Router();

router.get('/userDetails',getuserData)

module.exports = router