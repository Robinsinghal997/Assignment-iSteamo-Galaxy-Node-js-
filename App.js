const express = require('express')
const app = express();
app.use(express.json())

// route imports

const Students = require('./routes/studentRoute')

app.use('/api/v1',Students)

module.exports = app

