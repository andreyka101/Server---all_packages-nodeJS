const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello pppppWold')
})

app.listen(3000)