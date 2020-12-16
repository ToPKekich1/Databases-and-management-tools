const { Client } = require('pg');
const client = new Client(
    'postgres://postgres:Misha211100@localhost:5432/internetshop'
);
client.connect();

class OrderProduct {
    constructor(orderid, productid, count) {
        this.orderid = orderid;
        this.productid = productid;
        this.count = count;
    }

    static async getOrdersProducts() {
        try {
            let res = await client.query('select * from orders_products');
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async addOrderProduct() {
        try {
            await client.query(
                `insert into orders_products (orderid, productid, count) values (${this.orderid},${this.productid},${this.count})`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async deleteOrderProduct(id) {
        try {
            await client.query(
                `delete from orders_products where orderid=${id}`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async findOrdersProducts(orderid, productid) {
        let res;
        try {
            if (orderid && productid) {
                res = await client.query(
                    `select * from orders_products where orderid='${orderid}' and productid='${productid}'`
                );
            } else if (orderid) {
                res = await client.query(
                    `select * from orders_products where orderid='${orderid}'`
                );
            } else if (productid) {
                res = await client.query(
                    `select * from orders_products where productid='${productid}'`
                );
            }
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = OrderProduct;
