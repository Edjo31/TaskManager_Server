const router =require('express').Router()
const controller=require('../controller/semestre.controller')


router.get('/getsemesters',controller.getSemesters)
router.get('/getsemester/:id_semester',controller.getSemester)
router.post('/addsemester',controller.addsemester)

module.exports=router