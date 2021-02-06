const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/register', (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        db.query("INSERT INTO Users (name, password) VALUES (?, ?)", 
        [username, password], 
        (err, results) => {
            if (err)
                console.log(err);
            res.send(results);
        });
    } catch (Exception) {
        return console.error(Exception);
    }
});

module.exports = router;