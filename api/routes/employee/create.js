const EmployeeController = require('../../controllers/EmployeeController');
const createValidation = require('../../validation/employee/create');

module.exports = (server, routes, prefix = '/employee') => {
    routes.post('/api/v1/employee', createValidation, EmployeeController.create);
    server.use(prefix, routes);
}