var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main.hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('public'))

// Routes

server.get('/', index.getUsers)
server.get('/profile/:id', index.getProfile)

server.post('/animals', index.postUser)
