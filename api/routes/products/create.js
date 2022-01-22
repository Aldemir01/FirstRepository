const ProductController = require('../../controllers/ProductController');
const createValidation = require('../../validation/product/create');

module.exports = (server, routes, prefix = '/employee') => {
    routes.post('/api/v1/product', createValidation, ProductController.create);
    server.use(prefix, routes);
}