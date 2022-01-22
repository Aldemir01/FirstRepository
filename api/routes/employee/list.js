const EmployeeController = require('../../controllers/EmployeeController');

module.exports = (server, routes, prefix = '/employee') => {
    routes.get('/api/v1/employee', EmployeeController.list);
    server.use(prefix, routes);
}