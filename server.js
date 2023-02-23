const express = require('express')
const app = express()
const ejs = require('ejs')
const http = require('http')
const addRouter = require('./Routers/add')
const dbcontroller = require('./dbcontroller')
// const bodyparser = require('body-parser')
const bodyParser = require('body-parser')

app.set('view engine','ejs');

app.get('/', (req,res)=>{
    console.log('Client on server')
    res.send('WELCOME')
})

app.use('/add', addRouter)
app.use(bodyParser.json())





app.listen(3005, ()=>{
    console.log('Server started at http://localhost:3005')
})

function test() {
    
}

dbcontroller.add(2,1.2,1.1,test)