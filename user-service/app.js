const express = require("express");
const cors = require("cors");
const app = express();


const mongoose = require("mongoose");
require('dotenv/config');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

const usersRoute = require('./routes/users');

app.use('/users', usersRoute);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Database is connected - users");
});



app.get('/', (req,res) => {
    res.send("Home");
})


app.get('/users', (req,res) => {
    res.send("Users");
})

app.listen(3333);