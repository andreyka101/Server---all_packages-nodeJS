# здесь будет представлен список пакетов для сервера

инструкция как установить сервер по ссылке ниже

``` bash
https://github.com/andreyka101/Server---basic-nodeJS-express
```
<!-- ------------------------------------------ -->
# nodemon

___

описание - nodemon
<br/>
если demon видит ,что код в файле изменился
<br/>
тогда он перезагружает сервер

___

установка

``` bash
npm i nodemon
```
теперь для запуска сервера нужно писать не node index.js
``` bash
nodemon index.js
```
<!-- ------------------------------------------ -->
# compression

___

описание - compression
<br/>
сжимает файлы

___

установка

``` bash
npm i compression
```
потом напишу
<!-- ------------------------------------------ -->
# cors

___

описание - cors
<br/>
cors — позволяет веб-приложениям получать доступ к ресурсам с других доменов.

___

установка

``` bash
npm i cors
```
подключение модуля
``` bash
import cors from 'cors'
```

включаем cors
<br/>
пишем в верху файла

``` bash
app.use(cors())
```
если хочешь чтоб запросы были только с твоего другого домена , а другие не могли запрашивать 
<br/>
тогда в cors() пиши нужный тебе домен
<br/>
пример:

``` bash
app.use(cors("http://другой домен/"))
```
<!-- ------------------------------------------ -->
# body-parser

___

описание - body-parser
<br/>
это промежуточная функция которая занимается анализом переданных данных

___

установка

``` bash
npm i body-parser
```
подключение модуля
``` bash
import bodyParser from 'body-parser'
```

включаем body-parser
<br/>
пишем в верху файла

``` bash
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```
теперь сервер видит полученный файл
<br/>
проверка:

``` bash
app.post('/data',(req,res)=>{
  console.log(req.body)
})
```
<!-- ------------------------------------------ -->
# multer

___

описание - multer
<br/>
Multer — это middleware для фреймворка express для обработки multipart/form-data, нужная в первую очередь при загрузке файлов. Написана как обертка над busboy для ее максимально эффективного использования.
<br/>
ВАЖНО: Multer не обрабатывает никакой другой тип форм, кроме multipart/form-data.

___

установка

``` bash
npm i multer
```
подключение модуля
``` bash
import multer from 'multer'
```

включаем multer
<br/>
пишем в верху файла

``` bash
none
```
none
<br/>
проверка:

``` bash
none
```
<!-- ------------------------------------------ -->
# sharp

___

описание - sharp
<br/>
производят разные манипуляции с картинками 
<br/>
например:
<br/>
создаёт новые ужатые картинки
<br/>
редактирование метаданных картинки
<br/>
и тд.


___

установка

``` bash
npm i sharp
```
подключение модуля
``` bash
import multer from 'multer'
```

включаем multer
<br/>
пишем в верху файла

``` bash
none
```
none
<br/>
проверка:

``` bash
none
```

