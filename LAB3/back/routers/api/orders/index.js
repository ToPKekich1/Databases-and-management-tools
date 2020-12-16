const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const Orders = require('../../../controllers/orderControllers/controllers');

router.get('/orders', Orders.ordersList); //get orders
router.post('/orders', Orders.addOrder); //add Order
router.delete('/orders/:id', Orders.deleteOrder); //delete Order
router.post('/orders/find', Orders.findClientOrders); //find orders

module.exports = router;
