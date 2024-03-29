const router=require('express').Router()
const controller=require('../controller/facultad.controller')

router.get('/getfaculties',controller.getAllFaculties)
router.get('/getfaculty/:faculty_id',controller.getOneFalcuty)
router.post('/addfaculties',controller.insertFaculty)
router.put('/updatefaculty/:faculty_id',controller.updateFaculty)
router.delete('/deletefaculty/:faculty_id',controller.deleteFaculty)
router.get('/activefaculties',controller.viewFaculties)


module.exports=router