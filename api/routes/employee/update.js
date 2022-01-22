const EmployeeController = require('../../controllers/EmployeeController');
const updateValidation = require('../../validation/employee/update');

module.exports = (server, routes, prefix = '/employee') => {
    routes.get('/api/v1/employee/:employee_id', updateValidation, EmployeeController.update);
    server.use(prefix, routes);
}