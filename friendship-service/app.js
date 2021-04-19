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

const FriendsRoute = require('./routes/friends');

app.use('/friends', FriendsRoute);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Database is connected - friends");
});



app.get('/', (req,res) => {
    res.send("Home");
})


app.get('/friends', (req,res) => {
    res.send("Friends");
})

app.listen(5555);