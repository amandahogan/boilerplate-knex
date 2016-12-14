var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  addUser
}


function addUser (name, email, image) {
  return knex('users').insert({name:name, email:email})
    .then (function (id) {
      return knex('profiles').insert({user_id:id[0], image:image})
    })
}
