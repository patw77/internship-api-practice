// existing data (example)
const employees = [
    { id: 1, name: "Alice", department: "HR" },
    { id: 2, name: "Bob", department: "IT" },
    { id: 3, name: "Charlie", department: "Finance" },
    { id: 4, name: "Diana", department: "HR" },
    { id: 5, name: "Ethan", department: "Finance" },
];

// GET all employees
exports.getEmployees = (req, res) => {
    res.json(employees);
};

// GET HR employees
exports.getHREmployees = (req, res) => {
    const hrEmployees = employees.filter(emp => emp.department === "HR");
    res.json(hrEmployees);
};

// GET filtered employees by query parameter
exports.getFilteredEmployees = (req, res) => {
    const { department } = req.query;
    if (!department) {
        return res.status(400).json({ message: "Please provide a department" });
    }
    const filtered = employees.filter(
        emp => emp.department.toLowerCase() === department.toLowerCase()
    );
    res.json(filtered);
};

// ✅ NEW: GET Finance employees
exports.getFinanceEmployees = (req, res) => {
    const financeEmployees = employees.filter(emp => emp.department === "Finance");
    res.json(financeEmployees);
};


// examplechange2


// example add of changes


//example changes 4

// example change 3
// examplechange2

// example add of changes

