require('dotenv').config()

const app=require('./app')
app.listen(5060,function (){
    console.log("Running...")
})
