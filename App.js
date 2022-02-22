const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT
app.use(express.json())

const Student = require('./Apis/route')

app.use('/api/v1', Student)


app.listen(port, () => {
    console.log(`Server is running On ${port}`);
})
