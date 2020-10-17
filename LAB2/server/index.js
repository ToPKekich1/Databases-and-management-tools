const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use('/passport', require('./routes/passport'));

//ROUTES//

//PASSPORT ROUTES

//add passport

//add client
app.post('/clients', async (req, res) => {
    try {
        const { clientid, login, password } = req.body;
        const newClient = await pool.query(
            'INSERT INTO clients(clientid, login, password) VALUES ($1, $2, $3) RETURNING *',
            [clientid, login, password]
        );

        res.json(newClient.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//add orders
app.post('/orders', async (req, res) => {
    try {
        const { clientid } = req.body;
        const newOrder = await pool.query(
            'INSERT INTO orders(clientid) VALUES ($1) RETURNING *',
            [clientid]
        );

        res.json(newOrder.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//add products
app.post('/products', async (req, res) => {
    try {
        const { name, price } = req.body;
        const newProduct = await pool.query(
            'INSERT INTO product(name, price) VALUES ($1, $2) RETURNING *',
            [name, price]
        );

        res.json(newProduct.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//add reviews
app.post('/reviews', async (req, res) => {
    try {
        const { text, client_name, product_id } = req.body;
        const newReview = await pool.query(
            'INSERT INTO reviews(text, client_name, product_id) VALUES ($1, $2, $3) RETURNING *',
            [text, client_name, product_id]
        );

        res.json(newReview.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

app.post('/orders_products', async (req, res) => {
    try {
        const { orderid, productid, count } = req.body;
        const newOrdersProducts = await pool.query(
            'INSERT INTO orders_products(orderid, productid, count) VALUES ($1, $2, $3) RETURNING *',
            [orderid, productid, count]
        );

        res.json(newOrdersProducts.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log('Server has been started on port 5000');
});
