const express = require('express')
const app = express()
const port=process.env.PORT || 3000       
const passport=require('passport')
app.use(passport.initialize())


var google_auth20=express.Router()
app.use('/',google_auth20)
require('./passport-api/google-auth20')(google_auth20,passport)





var linkedin=express.Router()
app.use('/',linkedin)
require('./passport-api/linkedin')(linkedin,passport)




var facebook=express.Router()
app.use('/',facebook)
require('./passport-api/facebook')(facebook,passport)



app.get('/',(req,res)=>{
    res.send("<center><h1>This Url Not Found...</h1><a href='https://www.google.com/'>Go back...</a>")
})
app.get('/:name',(req,res)=>{
    res.send("<center><h1>This Url Not Found...</h1><a href='https://www.google.com/'>Go back...</a>")
})

app.get('/auth/:other',(req,res)=>{
    res.send("<center><h1>This Url Not Found...</h1><a href='https://www.google.com/'>Go back...</a>")
})




app.listen(port, () => {
    console.log('PORT listining:',port);
})