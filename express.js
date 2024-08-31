const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser({extended:false}))

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send('name:'+req.body.fname+' '+req.body.lname+' Mobile:'+req.body.mobile)
})

app.listen(3000,()=>{
    console.log('Server Started')
    
})