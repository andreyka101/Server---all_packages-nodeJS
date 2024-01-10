const express = require('express')
const compression = require('compression')
const app = express({strategy:8})


app.use(compression())


app.use(express.static("static_files"))


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/A9', function (req, res) {
  res.send('9pip9')
})


app.get('/hello/:name', function (req, res) {
  res.send('hello ' + req.params.name)
})


console.log("сервер работает")


app.listen(3500)