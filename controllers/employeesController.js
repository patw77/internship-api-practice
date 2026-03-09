// controllers/employeesController.js

// Sample employee data
const employees = [
    { id: 1, name: 'Alice', department: 'Finance' },
    { id: 2, name: 'Bob', department: 'IT' },
    { id: 3, name: 'Charlie', department: 'Finance' },
    { id: 4, name: 'David', department: 'HR' }
];

// Get all employees
exports.getAllEmployees = (req, res) => {
    res.json(employees);
};

// Filter employees by department
exports.filterByDepartment = (req, res) => {
    const { department } = req.query;
    if (!department) {
        return res.status(400).json({ error: 'Department query required' });
    }
    const results = employees.filter(e => e.department === department);
    res.json(results);
};

// Get employees in HR (example endpoint)
exports.getHrEmployees = (req, res) => {
    const results = employees.filter(e => e.department === 'HR');
    res.json(results);
};

// Example new endpoint
exports.getItEmployees = (req, res) => {
    const results = employees.filter(e => e.department === 'IT');
    res.json(results);
};



// adding of one line 1


// adding of one line 1

// examplechange2


// example add of changes



//example changes 4

// example change 3
// examplechange2

// example add of changes


     