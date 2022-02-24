const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`connected database with ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDatabase