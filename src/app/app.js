const express = require('express')
const facultadRouter=require('./routes/facultad.router')
const semesterRouter=require('./routes/semestre.router')
const { json } = require('sequelize')
const app=express()

app.use(express.json())
app.use('/api/v1/faculty',facultadRouter)
app.use('/api/v1/semester',semesterRouter)


app.get('/',(req,res)=>{
    res.send('hola')
})


module.exports=app
