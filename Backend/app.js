const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDatabase = require('./database/database');
const userRoutes = require('./routes/user.routes');


connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send("Hello Uber Clone")
});


app.use('/users', userRoutes)


module.exports = app;