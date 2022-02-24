const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

// config file 
dotenv.config({path:'config/config.env'})

// connecting database 
connectDatabase()
var port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running On ${port}`);
})