const connection = require('../Database/Database')
module.exports = {
    details: (data) => {
        console.log("data",data);
        return new Promise((resolve, reject) => {
            connection.pool.query('SELECT * FROM student.studenttable',
                (error, results) => {
                    if (error) {
                        return reject(error)
                    } else {
                        return resolve(results)
                    }
                }
            )
        })
    }
}