const express = require('express')
const router=require('./routes/facultad.router')
const { json } = require('sequelize')
const app=express()

app.use(express.json())
app.use('/api/v1/',router)


app.get('/',(req,res)=>{
    res.send('hola')
})


module.exports=app
