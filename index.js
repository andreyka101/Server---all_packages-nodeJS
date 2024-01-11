// подключение модулей
import express from 'express'
import compression from 'compression'
import cors from 'cors'


const app = express()


// включение compression
// почему то не работает
app.use(compression({strategy:3}))



// включение cors
app.use(cors())




app.use(express.static("static_files"))


app.get('/', function (req, res) {
  res.send('Hello World')
})
// http://localhost:3500/A9
app.get('/A9', function (req, res) {
  res.send('9pip9')
})
app.get('/hello/:name', function (req, res) {
  res.send('hello ' + req.params.name)
})


console.log("сервер работает")


app.listen(3500)