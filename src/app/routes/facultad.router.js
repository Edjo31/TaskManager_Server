const router=require('express').Router()
const controller=require('../controller/facultad.controller')

router.get('/faculties',controller.getAllFaculties)
router.get('/faculties/:facultad_id',controller.getOneFalcuty)
router.post('/faculties',controller.insertFaculty)
router.put('/faculties/:facultad_id',controller.updateFaculty)
router.delete('/faculties/:facultad_id',controller.deleteFaculty)
router.get('/verFacultad',controller.viewFaculties)


module.exports=router