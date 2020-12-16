const { Client } = require('pg');
const client = new Client(
    'postgres://postgres:Misha211100@localhost:5432/internetshop'
);
client.connect();

class Review {
    constructor(text, client_name, productid) {
        this.text = text;
        this.client_name = client_name === undefined ? null : client_name;
        this.productid = productid;
    }

    static async getReviews() {
        try {
            let res = await client.query('select * from reviews');
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async addReview() {
        try {
            console.log(this.text, this.client_name, this.productid);
            await client.query(
                `insert into reviews (text, client_name, productid) values ('${this.text}','${this.client_name}',${this.productid})`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async deleteReview(id) {
        try {
            await client.query(`delete from reviews where reviewid=${id}`);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async findReviews(productid) {
        let res;
        try {
            res = await client.query(
                `select * from reviews where productid='${productid}'`
            );
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = Review;
