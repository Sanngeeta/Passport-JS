
const express=require('express')
const passport=require('passport')
const app=express()

var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: "1aaceb3708c984523872",
    clientSecret: "eb44dfbac51ea5c6d1492ddc73b16f145d2c17f1",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile);
    return cb()
    
  }
));

// Authenticate Requests

// Use passport.authenticate(), specifying the 'github' strategy, to authenticate requests.

// For example, as route middleware in an Express application:

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });





app.listen(3000,()=>{
    console.log('PORT LISTINING....');
})