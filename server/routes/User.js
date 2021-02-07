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
        console.error(Exception);
    }
});

router.post('/login', (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        db.query('SELECT * FROM Users WHERE name = ?', [username], (err, results) => {
            if (err)
                console.log(err)
            if (results) {
                // Migrate to BCrypt -- for now dummy style
                if (results[0].password == password) {
                    res.send.json({'status': 200, 'message': 'You are logged in!'});
                } else {
                    res.send.json({'status': 401, 'message': 'Wrong username or password'});
                }
            } else {
                res.send.json({'status': 404, 'message': 'User does not exist!'})
            }
        })
    } catch (Exception) {
        console.log(Exception)
    }
})

module.exports = router;