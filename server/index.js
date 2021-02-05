const express = require('express');
const app = express();


const userRoute = require('./routes/User');
app.use('/user', userRoute);

app.listen((3001 || process.env.PORT), (req, res) => {
    console.log('Server running...');
});

