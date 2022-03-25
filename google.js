const express=require('express')
const passport=require('passport')
const app=express()


var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "872464991282-758ol27m883ekn3pntd4ejvjefu9ucs0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile);
    return cb()
  }
));



app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });





app.listen(3000,()=>{
    console.log('Listening port 3000');
})
//   {"web":{"client_id":"872464991282-758ol27m883ekn3pntd4ejvjefu9ucs0.apps.googleusercontent.com","project_id":"rosy-sun-343808","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3000"],"javas
  