const express = require('express');
const app = express();

app.listen((3001 || process.env.PORT), (req, res) => {
    console.log('Server running...');
});

