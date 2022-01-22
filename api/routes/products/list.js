const ProductController = require('../../controllers/ProductController');

module.exports = (server, routes, prefix = '/product') => {
    routes.get('/api/v1/product', ProductController.list);
    server.use(prefix, routes);
}