const express = require('express');
const router = express.Router();
const mysqlConnection = require('../databse');

router.get('/getUsers', (req, res) => {
    mysqlConnection.query('SELECT * FROM Users', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

//Esta funcion encuentra un usuario haciendo uso de su numero de cedula.

// /getUsers/[Cedula]

router.get('/getUsers/:Cedula', (req, res) => {
    const { Cedula } = req.params;
    console.log(Cedula);
    mysqlConnection.query('SELECT * FROM Users WHERE Cedula = ?', [Cedula], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post()

module.exports = router;