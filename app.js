var express = require('express')
var path = require('path')
var router = require("./router")
var bodyParser = require('body-parser') 

var app = express()

//第一个是url标识，第二个是文件目录路径
app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/views/',express.static(path.join(__dirname,'./views/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

app.engine('html',require('express-art-template'))

//默认是views目录，方便更改
app.set('views',path.join(__dirname,'./views'))

//把路由挂载到 app 中 
app.use(router)

app.listen(5000,function(){
	console.log('running...')
})