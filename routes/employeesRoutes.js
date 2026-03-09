// routes/employeesRoutes.js

const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

// Define routes
router.get('/', employeesController.getAllEmployees);
router.get('/hr', employeesController.getHrEmployees);
router.get('/filter', employeesController.filterByDepartment);
router.get('/it', employeesController.getItEmployees);

module.exports = router;