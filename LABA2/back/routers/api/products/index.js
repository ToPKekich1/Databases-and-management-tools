const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const Products = require('../../../controllers/productControllers/controllers');

router.get('/products', Products.productsList); //get products
router.post('/products', Products.addProduct); //add products
router.put('/products/:id', Products.editProduct); //update products
router.delete('/products/:id', Products.deleteProduct); //delete products
router.post('/products/find', Products.findProducts); //find products

module.exports = router;
