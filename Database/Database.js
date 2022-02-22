const { createPool } = require('mysql')

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
    connectionLimit: process.env.LIMIT,
})

pool.getConnection((error) => {
    if (error) {
        console.log(error);
        console.log("Database Connection Error ......");
    } else {
        console.log("Database is connected");
    }
})

module.exports = {
    pool
}