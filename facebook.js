const express=require('express')
const passport=require('passport')
const app=express()


var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "245556854362883",
    clientSecret: "91990b353df66a0f5429c2a44642048c",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        
    // });
    console.log(profile);

    return cb();
  }
));





app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



  app.listen(3000,()=>{
    console.log('Listening port 3000');
})