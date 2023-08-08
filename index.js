const express = require('express')

const app = express()

const cors = require('cors')

const dataService = require('./service/data.service')

// to parsejson data
app.use(express.json())

app.use(cors({
    origin:['http://localhost:4200']
}))

app.listen(3000,()=>{
    console.log("server started at port 3000");
})

// http request

app.post('/login',(req,res)=>{
    console.log("inside login function");
    console.log(req.body);
    // asynchronous
    dataService.login(req.body.uname,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/register',(req,res)=>{
    console.log("inside register function");
    console.log(req.body);
    // asynchronous
    dataService.register(req.body.uname,req.body.pswd,req.body.email,req.body.phone)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})



// get allPlants API
app.get('/dashboard',(req,res)=>{
    console.log("inside getAllPlants function ");
    dataService.getAllPlants()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
