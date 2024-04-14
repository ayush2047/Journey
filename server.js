const express=require('express')//use kr rhe h to btana pdega ki required h express
const app=express()
app.get('/', function(req,res){//get is used to retrieve information '/'forward slash is used for the giving the data
    //res is response
    res.send('Hello World')
})

app.get('/rice', (req,res)=>{
    res.send('sure')
})
app.get('/idli', (req,res)=>{
    var customized_idli={
        name:'rava idli',
        size:'10 cm',

    }
    res.send(customized_idli)
})
app.listen(3000,()=>{
    console.log('listening on port 3000')//to print server is live
})