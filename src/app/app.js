const express = require('express')
const facultyRouter=require('./routes/facultad.router')
const semesterRouter=require('./routes/semestre.router')
const app=express()
app.use(express.json())
app.use('/api/v1/faculty',facultyRouter)
app.use('/api/v1/semester',semesterRouter)


app.get('/',(req,res)=>{
    res.send({
        status:"ok",
        body:"TaskManager it's on "
    })
})


module.exports=app
