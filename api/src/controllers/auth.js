var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
const { User } = require("../db");

passport.use(new Strategy(
    function(username, password, done) {
      User.findByUsername(username)
        .then((user) => {
          if(!user) {
            return done(null, false);
          }
          if(user.password != password) {
            return done(null, false);
          }
          return done(null, user);
        })
      .catch(err => {
        return done(err);
      })
    }));