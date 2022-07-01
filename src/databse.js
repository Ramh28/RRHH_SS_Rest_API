
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'labs-dbservices01.ucab.edu.ve',
    user: 'bd2_202225_27936663',
    password: '27936663',
    database: 'bd2_202225_g4'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected! ');
    }
});

module.exports = mysqlConnection;