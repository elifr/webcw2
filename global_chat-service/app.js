const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 6666

const path = require('path')
app.use(express.static(path.join(__dirname + '/public')))

// just to test the server
app.get('/', (req, res) => {
  res.status(200).send('Working')
})



server.listen(6666);