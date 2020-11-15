const { Client } = require('pg');
const client = new Client(
    'postgres://postgres:Misha211100@localhost:5432/internetshop'
);
client.connect();

class Order {
    constructor(clientid) {
        this.clientid = clientid;
    }

    static async getOrders() {
        try {
            let res = await client.query('select * from orders');
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async addOrder() {
        try {
            await client.query(
                `insert into orders (clientid) values (${this.clientid})`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async deleteOrder(id) {
        try {
            await client.query(`delete from orders where orderid=${id}`);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async findClientOrders(clientid) {
        let res;
        try {
            res = await client.query(
                `select * from orders where clientid=${clientid}`
            );

            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = Order;
