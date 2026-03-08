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


// for hr employees
exports.getHREmployees = (req, res) => {
    const hrEmployees = employees.filter(emp => emp.department.toLowerCase() === "hr");
    res.json(hrEmployees);
};