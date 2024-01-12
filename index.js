//ANCHOR - подключение модулей
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()


//REVIEW - включение compression
//FIXME - почему то не работает
app.use(compression({strategy:3}))



//FIXME - ???
//REVIEW - включение cors
app.use(cors("http://localhost:1234/"))



//REVIEW - включение body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





// пример использования body-parser
app.post('/data',(req,res)=>{
  console.log(req.body)
  res.send({ok:"сообщение от сервера"})
})






//TODO - я это не менял (кроме порта)
app.use(express.static("static_files"))
app.get('/', function (req, res) {
  res.send('Hello World')
})
// http://localhost:3500/A9
app.get('/A9', function (req, res) {
  res.send('9pip9')
})


console.log("сервер работает")


app.listen(3500)