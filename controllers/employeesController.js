const employees = require("../data/employees.json");

exports.getEmployees = (req, res) => {
    res.json(employees);
};

exports.getFilteredEmployees = (req, res) => {
    const { department } = req.query;

    if (!department) return res.json(employees);

    const filtered = employees.filter(
        emp => emp.department.toLowerCase() === department.toLowerCase()
    );

    res.json(filtered);
};