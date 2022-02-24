const ErrorHandler = require('../utils/errorHandling')

module.exports = (err, req, res, next) => {

    if(err.name === 'CastError'){
        const message = `Resource not found. invalid ${err.path}`
        err = new ErrorHandler(message,400)
    }
    if(err.code === 11000){
        const message = `This this Email_id:${err.keyValue.email_id} is Already Used`
        err = new ErrorHandler(message,400)
    }

    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"
    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })



    // wrong id error


}