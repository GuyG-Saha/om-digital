const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/register', (req, res) => {
    try {
        db.query("INSERT INTO Users (name, password) VALUES ('testuser', 'password')", 
        (err, results) => {
            console.log(err);
            res.send(results);
        });
    } catch (Exception) {
        return console.error('DB error');
    }
});

module.exports = router;