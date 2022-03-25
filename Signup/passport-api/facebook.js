

module.exports=(app,passport)=>{
    var FacebookStrategy = require('passport-facebook').Strategy;
    var data={}
    passport.use(new FacebookStrategy({
        clientID: "245556854362883",
        clientSecret: "91990b353df66a0f5429c2a44642048c",
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields:['displayName','photos','email']
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        data['Name']=profile.displayName
        data['Image']=profile.photos[0].value
        process.nextTick(()=>{
            return cb(null,profile)
        })
        
    }
    ));


    passport.serializeUser((user,done)=>{
        done(null,user)
    })


    app.get('/auth/facebook',
    passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',passport.authenticate('facebook'), (req,res)=>{
        res.send("<center><h1>Welcome To My Site "+data.Name+"</h1><img src="+data.Image+"></img></center>")
        
    })
    }