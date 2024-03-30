const router = require("express").Router();
const controller = require("../controller/clase.controller");

router.get("/getclasses", controller.getClasses);
router.get("/getclass/:id_class", controller.getClass);
router.post("/addclass", controller.addClass);
router.put("/updateclass/:id_class", controller.updateClass);
router.delete("/deleteclass/:id_class", controller.deleteClass);

module.exports = router;
