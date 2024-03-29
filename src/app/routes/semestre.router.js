const router = require("express").Router();
const controller = require("../controller/semestre.controller");

router.get("/getsemesters", controller.getSemesters);
router.get("/getsemester/:id_semester", controller.getSemester);
router.post("/addsemester", controller.addSemester);
router.put("/updatesemester/:id_semester",controller.updateSemester)
router.delete('/deletesemester/:id_semester',controller.deleteSemester)

module.exports = router;
