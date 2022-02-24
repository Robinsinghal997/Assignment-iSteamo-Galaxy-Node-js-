const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Sutting down the server due to uncaught Exception  promis rejection`);
    process.exit(1)
})
// config file 
dotenv.config({ path: 'config/config.env' })

// connecting database 
connectDatabase()
var port = process.env.PORT

const server = app.listen(port, () => {
    console.log(`Server is running On ${port}`);
})

process.on('unhandledRejection', err => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting Down the server`);

    server.close(() => {
        process.exit(1)
    })
})