const express = require("express");
const router = express.Router();
const locationsCtrl = require("../../controllers/locations");

/*---------- Public Routes ----------*/
router.get("/", locationsCtrl.index);
router.post("/", locationsCtrl.create);

/*---------- Protected Routes ----------*/

module.exports = router;