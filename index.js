//ANCHOR - подключение модулей
import express from 'express'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
//FIXME - спросить про multer
import multer from 'multer'


const app = express()


//REVIEW - включение compression
//FIXME - почему то не работает strategy
app.use(compression({
  // сила сжатия (9 max)
  strategy:6,
  // Сжимаем HTTP ответы, тело которых длиннее одного байта
  threshold: 1,
  // Сжимаем HTTP ответы независимо от их mime-типа
  filter: function() {return true;},
})); 



//REVIEW - включение cors
app.use(cors())
// пример запроса только с моего домена
// app.use(cors({origin:["http://localhost:5173",'http://127.0.0.1:5173']}))



//REVIEW - включение body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//REVIEW - включение multer
//FIXME - изменить
// вся информация в видео
const upload = multer({dest:"receivingFile/"})






//NOTE -  пример использования body-parser
app.post('/data',(req,res)=>{
  console.log(req.body)
  res.send({ok:"сообщение от сервера"})
})



//NOTE -  пример использования multer
//FIXME - доделать
// доделать: нужно написать на клиенте отправку файла это вроде видео урок server1
// видео урок по multer server3 2:03:XX и server4 начало
app.post('/file', upload.any() ,(req,res)=>{
  console.log(req.body)
  console.log(req.file)
  console.log(req.files)
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