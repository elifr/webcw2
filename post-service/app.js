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

const PostsRoute = require('./routes/posts');

app.use('/posts', PostsRoute);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Database is connected - posts");
});



app.get('/', (req,res) => {
    res.send("Home");
})


app.get('/posts', (req,res) => {
    res.send("Posts");
})

app.listen(4444);