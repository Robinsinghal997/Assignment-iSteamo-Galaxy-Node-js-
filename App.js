const express = require('express')
const app = express();
app.use(express.json())
const errorMiddleware = require("./middleware/error")

// route imports

const Students = require('./routes/studentRoute')

app.use('/api/v1',Students)

// middleware for error 

app.use(errorMiddleware)

module.exports = app

