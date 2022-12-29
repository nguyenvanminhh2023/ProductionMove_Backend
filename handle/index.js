const mysql = require('mysql')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'productionmove2',
        port: '3307',
        multipleStatements: true
    }
)

db.connect((e) => {
    if (e) throw e
    console.log('connect mysql successfully')
})

module.exports = db