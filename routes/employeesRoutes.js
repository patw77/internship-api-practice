const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeesController");

router.get("/", controller.getEmployees);
router.get("/filter", controller.getFilteredEmployees);

module.exports = router;