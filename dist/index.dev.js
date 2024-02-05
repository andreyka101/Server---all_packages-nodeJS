"use strict";

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _fs = _interopRequireDefault(require("fs"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//ANCHOR - подключение модулей
//FIXME - спросить про multer
var app = (0, _express["default"])(); //REVIEW - пример работы  compression
//FIXME - почему то не работает strategy

app.use((0, _compression["default"])({
  // сила сжатия (9 max)
  strategy: 2,
  // Сжимаем HTTP ответы, тело которых длиннее одного байта
  threshold: 1,
  // Сжимаем HTTP ответы независимо от их mime-типа
  filter: function filter() {
    return true;
  }
})); //REVIEW - пример работы  cors

app.use((0, _cors["default"])()); // пример запроса только с моего домена
// app.use(cors({origin:["http://localhost:5173",'http://127.0.0.1:5173']}))
//REVIEW - пример работы  body-parser
// parse application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // parse application/json

app.use(_bodyParser["default"].json()); //REVIEW - пример работы  multer
//FIXME - изменить
// вся информация в видео

var upload = (0, _multer["default"])({
  dest: "receivingFile/"
}); //REVIEW - пример работы  fs
// чтение

var file = _fs["default"].readFileSync("./static/data.json", "utf8");

console.log("file =", file); //NOTE -  пример использования body-parser

app.post('/data', function (req, res) {
  console.log(req.body);
  res.send({
    simpleAnswer: "сообщение от сервера"
  });
}); //NOTE -  пример использования multer
//FIXME - доделать
// доделать: нужно написать на клиенте отправку файла это вроде видео урок server1
// видео урок по multer server3 2:03:XX и server4 начало

app.post('/file', upload.any(), function (req, res) {
  console.log(req.body);
  console.log(req.file);
  console.log(req.files);
  res.send({
    ok: "сообщение от сервера"
  });
}); //TODO - я это не менял (кроме порта)
// http://localhost:3500/img/110435-iskusstvo-graficeskij_dizajn-svet-krasnyj_cvet-art-1920x1080.jpg

app.use(_express["default"]["static"]("static_files"));
app.get('/', function (req, res) {
  res.send('Hello World');
}); // http://localhost:3500/A9

app.get('/A9', function (req, res) {
  res.send('9pip9');
});
console.log("сервер работает");
app.listen(3500);