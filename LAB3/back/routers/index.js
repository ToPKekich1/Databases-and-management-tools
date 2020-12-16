const router = require('express').Router();

const passportRouter = require('./api/passport');
const clientsRouter = require('./api/clients');
const ordersRouter = require('./api/orders');
const productsRouter = require('./api/products');
const ordersProductsRouter = require('./api/ordersProducts');
const reviewsRouter = require('./api/reviews');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/passports', passportRouter); //get passports
router.post('/passports', passportRouter); //add passports
router.put('/passports/:id', passportRouter); //update passport
router.delete('/passports/:id', passportRouter); //delete passport
router.post('/passports/find', passportRouter); //find passports

router.get('/clients', clientsRouter); //get clients
router.post('/clients', clientsRouter); //add client
router.put('/clients/:id', clientsRouter); //update client
router.delete('/clients/:id', clientsRouter); //delete client
router.post('/clients/find', clientsRouter); //find clients

router.get('/orders', ordersRouter); //get orders
router.post('/orders', ordersRouter); //add Order
router.delete('/orders/:id', ordersRouter); //delete Order
router.post('/orders/find', ordersRouter); //find orders

router.get('/products', productsRouter); //get products
router.post('/products', productsRouter); //add products
router.put('/products/:id', productsRouter); //update products
router.delete('/products/:id', productsRouter); //delete products
router.post('/products/find', productsRouter); //find products

router.get('/ordersProducts', ordersProductsRouter); //get orders and products
router.post('/ordersProducts', ordersProductsRouter); //add order and product
router.delete('/ordersProducts/:id', ordersProductsRouter); //delete order and product
router.post('/ordersProducts/find', ordersProductsRouter); //find order and product

router.get('/reviews', reviewsRouter); //get Reviews
router.post('/reviews', reviewsRouter); //add Reviews
router.delete('/reviews/:id', reviewsRouter); //delete Reviews
router.post('/reviews/find', reviewsRouter); //find Reviews

module.exports = router;
