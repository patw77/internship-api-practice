// controllers/employeesController.js

// Sample in-memory data
let employees = [
  { id: '1', name: 'Alice', department: 'HR' },
  { id: '2', name: 'Bob', department: 'IT' },
  { id: '3', name: 'Charlie', department: 'Finance' }
];

exports.getAllEmployees = (req, res) => {
  res.status(200).json(employees);
};

exports.getEmployeeById = (req, res) => {
  const employee = employees.find(e => e.id === req.params.id);
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.status(200).json(employee);
};

exports.createEmployee = (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

exports.updateEmployee = (req, res) => {
  const index = employees.findIndex(e => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Employee not found' });
  employees[index] = req.body;
  res.status(200).json(employees[index]);
};

exports.deleteEmployee = (req, res) => {
  const index = employees.findIndex(e => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Employee not found' });
  const deleted = employees.splice(index, 1);
  res.status(200).json(deleted[0]);
};