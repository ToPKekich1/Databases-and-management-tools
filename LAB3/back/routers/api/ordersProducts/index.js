const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const OrdersProducts = require('../../../controllers/ordersProductsControllers/controllers');

router.get('/ordersProducts', OrdersProducts.ordersProductsList); //get orders and products
router.post('/ordersProducts', OrdersProducts.addOrderProduct); //add order and product
router.delete('/ordersProducts/:id', OrdersProducts.deleteOrderProduct); //delete order and product
router.post('/ordersProducts/find', OrdersProducts.findOrdersProducts); //find order and product

module.exports = router;
