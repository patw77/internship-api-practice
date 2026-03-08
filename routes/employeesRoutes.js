const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeesController");

router.get("/", controller.getEmployees);
router.get("/filter", controller.getFilteredEmployees);
router.get("/hr", controller.getHREmployees); // for hr employees

module.exports = router;