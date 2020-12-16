const { Client } = require('pg');
const client = new Client(
    'postgres://postgres:Misha211100@localhost:5432/internetshop'
);
client.connect();

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static async getProducts() {
        try {
            let res = await client.query(
                `select productid, name, concat('$',price::numeric) as price from products`
            );
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async addProduct() {
        try {
            await client.query(
                `insert into products (name, price) values ('${this.name}','${this.price}')`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async editProduct(id) {
        console.log(this.name, this.price);
        try {
            await client.query(
                `update products set name='${this.name}', price='${this.price}' where productid=${id}`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async deleteProduct(id) {
        try {
            await client.query(`delete from products where productid=${id}`);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async findProduct(name, price) {
        let res;
        try {
            if (name && price) {
                res = await client.query(
                    `select productid, name, concat('$',price::numeric) as price from products where name='${name}' and price='${price}'`
                );
            } else if (name) {
                console.log(name);
                res = await client.query(
                    `select productid, name, concat('$',price::numeric) as price from products where name='${name}'`
                );
                console.log(res.rows);
            } else if (price) {
                res = await client.query(
                    `select productid, name, concat('$',price::numeric) as price from products where price='${price}'`
                );
            }
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = Product;
