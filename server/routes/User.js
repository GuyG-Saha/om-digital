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
            if (results.length > 0) {
                // Migrate to BCrypt -- for now dummy style
                if (results[0].password == password) {
                    res.json({
                        status: 200, 
                        message: 'You are logged in!', 
                        loggedIn: true, 
                        username: username
                    });
                } else {
                    res.json({
                        status: 401, 
                        message: 'Wrong username or password', 
                        loggedIn: false
                    });
                }
            } else {
                res.json({
                    status: 404, 
                    message: 'User does not exist!', 
                    loggedIn: false
                })
            }
        })
    } catch (Exception) {
        res.json({status: 404, message: 'User does not exist!', loggedIn: false})
    }
})

module.exports = router;