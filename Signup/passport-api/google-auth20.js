module.exports=(app,passport)=>{


    var GoogleStrategy = require('passport-google-oauth20').Strategy;
    var data={}
    passport.use(new GoogleStrategy({
    clientID: "514238537493-bqgd9pnj49e6nml9u2g76ern18k0pbvs.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
          data['Name']=profile.displayName
          data['Image']=profile.photos[0].value
          process.nextTick(function () {
            return cb(null,profile);
      });
      //     cb(null,profile)
      
      }
    ));


    passport.serializeUser((user,done)=>{
        done(null,done)
    })




    // Authenticate Requests
    // Use passport.authenticate(), specifying the 'google' strategy, to authenticate requests.
    // For example, as route middleware in an Express application:

    app.get('/auth/google',
      passport.authenticate('google', { scope: ['profile'] }));

    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{

      res.send("<center><h1>Welcome To My Site "+data.Name+"</h1><img src="+data.Image+"></img></center>")

    })
}