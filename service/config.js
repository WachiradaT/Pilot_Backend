const mysql= require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pilotproject'
})

connect.connect()

module.exports = {connect}