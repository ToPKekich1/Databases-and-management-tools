const router = require('./routers/index');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const start = async () => {
    app.listen(port, () => console.log('Server is working on port ' + port));
};

app.get('/passports', router); //get passport
app.post('/passports', router); //add passport
app.put('/passports/:id', router); //update passport
app.delete('/passports/:id', router); //delete passport
app.post('/passports/find', router); //find passports

app.get('/clients', router); //get clients
app.post('/clients', router); //add client
app.put('/clients/:id', router); //update client
app.delete('/clients/:id', router); //delete client
app.post('/clients/find', router); //find clients

app.get('/orders', router); //get orders
app.post('/orders', router); //add Order
app.delete('/orders/:id', router); //delete Order
app.post('/orders/find', router); //find orders

app.get('/products', router); //get products
app.post('/products', router); //add products
app.put('/products/:id', router); //update products
app.delete('/products/:id', router); //delete products
app.post('/products/find', router); //find products

app.get('/ordersProducts', router); //get orders and products
app.post('/ordersProducts', router); //add order and product
app.delete('/ordersProducts/:id', router); //delete order and product
app.post('/ordersProducts/find', router); //find order and product

app.get('/reviews', router); //get Reviews
app.post('/reviews', router); //add Reviews
app.delete('/reviews/:id', router); //delete Reviews
app.post('/reviews/find', router); //find Reviews

start();
