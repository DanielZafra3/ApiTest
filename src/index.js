var express = require('express');
var app = express();
var router = express.Router()  
var bodyParser = require('body-parser') 
//settings

var port = process.env.PORT || 8080  

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var router = require('./routes')
app.use('/api', router)

//middleware: funcion procesa datos antes de que el servidor lo reciba 

//empezando servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)