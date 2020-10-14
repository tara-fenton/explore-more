const express = require("express");
const router = express.Router();
const locationsCtrl = require("../../controllers/locations");
const photosCtrl = require("../../controllers/photos");

/*---------- Public Routes ----------*/
router.get("/", locationsCtrl.index);
router.post("/", locationsCtrl.create);
router.delete("/:id", locationsCtrl.delete);
router.put("/:id", locationsCtrl.update);

router.post("/photos", photosCtrl.create);

/*---------- Protected Routes ----------*/

module.exports = router;
