var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

var db = require('../db')

module.exports = {
  getUsers,
  getProfile,
  postUser
}

function getUsers (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfile (req, res) {
  knex('profiles')
  .join('users', 'profiles.user_id', '=', 'users.id')
    .select('users.name', 'profiles.image')
    .where('users.id', Number(req.params.id))
    .first()
    .then(function (userProfile){
      var vm = {
        name: userProfile.name,
        image: userProfile.image
      }
      res.render('profile', userProfile)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function postUser (req, res) {
  var name = req.body.name
  var email = req.body.email
  var image = req.body.image
  db.addUser(name, email, image)
  .then(function(err, vm){
    res.redirect('/')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
