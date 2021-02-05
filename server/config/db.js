const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pennylane6!',
  database : 'social_om'
});

module.exports = db;