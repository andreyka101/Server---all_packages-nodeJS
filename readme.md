# здесь будет представлен список пакетов для сервера

[инструкция как создать сервер](https://github.com/andreyka101/Server---basic-nodeJS-express)
<!-- ------------------------------------------ -->
# nodemon

___

описание - nodemon
<br/>
если demon видит ,что код в файле изменился
<br/>
тогда он перезагружает сервер

___

--установка--

``` bash
npm i nodemon
```
теперь в scripts для запуска сервера нужно писать не node index.js
``` bash
nodemon index.js
```
теперь в консоле для запуска сервера нужно писать
``` bash
npx nodemon index.js
```
<!-- ------------------------------------------ -->
# compression

___

описание - compression
<br/>
сжимает файлы
<br/>
Но
<br/>
compression тратит большие ресурсы процессора на сжатие
<br/>
по этому лучше использовать Apache или NGINX
<br/>
они не так нагружают процессор

___

--установка--

``` bash
npm i compression
```
включаем compression
<br/>
пишем в верху файла

``` bash
app.use(compression({
  // сила сжатия (9 max)
  strategy:1,
  // Сжимаем HTTP ответы, тело которых длиннее одного байта
  threshold: 1,
  // Сжимаем HTTP ответы независимо от их mime-типа
  filter: function() {return true;},
})); 
```

<!-- ------------------------------------------ -->
# cors

___

описание - cors
<br/>
cors — позволяет веб-приложениям получать доступ к ресурсам с других доменов.

___

--установка--

``` bash
npm i cors
```
--подключение-- модуля
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
тогда в cors({origin:[]}) пиши нужный тебе домен
<br/>
пример:

``` bash
app.use(cors({origin:["http://другой домен"]}))
```
<!-- ------------------------------------------ -->
# body-parser

___

описание - body-parser
<br/>
это промежуточная функция которая занимается анализом переданных данных

___

--установка--

``` bash
npm i body-parser
```
--подключение-- модуля
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
  res.send({ok:"сообщение от сервера"})
})
```
<!-- ------------------------------------------ -->
# multer

___

описание - multer
<br/>
Multer — это middleware для фреймворка express для обработки multipart/form-data, нужная в первую очередь при загрузке файлов.
<br/>
ВАЖНО: Multer не обрабатывает никакой другой тип форм, кроме multipart/form-data.

___

--установка--

``` bash
npm i multer
```
--подключение-- модуля
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

проверьте версию Node.js 
<br/>
минимальная версия которую потдерживает sharp это 18.17.0
--установка--

``` bash
npm i sharp
```
--подключение-- модуля
``` bash
import sharp from 'sharp'
```

используем sharp

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
# fs

___

описание - fs
<br/>
это файловая система nodeJS
<br/>
которая позволяет работать с файлами

___

устанавливать модуль не нужно по этому сразу его --подключаем-- 
``` bash
import fs from 'fs'
```

используем fs:
<br/>
открытие файла
<br/>
в методе readFileSync пишем :
<br/>
1 путь к файлу
<br/>
2 формат чтения
<br/>
в примере ниже я считываю json

``` js
const file = fs.readFileSync("./static/data.json" , "utf8")
```
перезапись файла
<br/>
в методе writeFileSync пишем :
<br/>
1 путь к файлу 
<br/>
2 текст на который мы хотим перезаписать
<br/>
в примере ниже я перезаписываю файл json

``` js
fs.writeFileSync("./static/data.json",JSON.stringify({sd:12}))
```

<!-- ------------------------------------------ -->
# prisma

___

описание - prisma
<br/>
она позволяет работать с базой данных в nodeJS

___


--установка--

``` bash
npm install prisma --save-dev
```

теперь создаём папку с файлами командой

``` bash
npx prisma init
```

можно для удобства скачать расширение Prisma
<br/>
<br/>

<!-- [если используешь другую СУБД тыкай сюда](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql) -->
--подключение--
<br/>
в файле .env 
<br/>
в глобальной переменной DATABASE_URL ссылку меняем на ссылку из вашего СУБД
<br/>
либо пишем эту ссылку

``` bash
СУБД://имя:пароль@localhost:5432/название_базы_данных?schema=public
```
в этой ссылке меняем:
<br/>

СУБД = на название твоего СУБД пример ( ```postgresql```, ```mysql```, ```sqlite```, ```sqlserver```, ```mongodb``` or ```cockroachdb``` ) ,
<br/>

имя = на имя пользователя СУБД например у меня это ```postgres```
<br/>
пароль = на пароль твоего СУБД ,
<br/>
название_базы_данных = на созданную в СУБД базу данных
<br/>
<br/>
в файле schema.prisma который находится в папке prisma
<br/>

в переменной ```provider``` который находится в ```datasource db``` пишем в строке название твоего СУБД пример ( ```postgresql```, ```mysql```, ```sqlite```, ```sqlserver```, ```mongodb``` or ```cockroachdb``` )
<br/>
потом в корне этого же файла создаём модель пример:

``` prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```
<br/>
<br/>
в файле ts или js (у меня это index.js) пишем в верху

``` js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```




используем fs:
<br/>
открытие файла
<br/>
в методе readFileSync пишем :
<br/>
1 путь к файлу
<br/>
2 формат чтения
<br/>
в примере ниже я считываю json

``` js
const file = fs.readFileSync("./static/data.json" , "utf8")
```
перезапись файла
<br/>
в методе writeFileSync пишем :
<br/>
1 путь к файлу 
<br/>
2 текст на который мы хотим перезаписать
<br/>
в примере ниже я перезаписываю файл json

``` js
fs.writeFileSync("./static/data.json",JSON.stringify({sd:12}))
```

