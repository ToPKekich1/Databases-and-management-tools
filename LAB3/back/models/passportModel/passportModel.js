const { Client } = require('pg');
const client = new Client(
    'postgres://postgres:Misha211100@localhost:5432/internetshop'
);
client.connect();

class Passport {
    constructor(name, surname, number) {
        this.name = name;
        this.surname = surname;
        this.number = number;
    }

    static async getPassports() {
        try {
            let res = await client.query('select * from passport');
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async addPassport() {
        try {
            await client.query(
                `insert into passport (name, surname, number) values ('${this.name}','${this.surname}', '${this.number}')`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async editPassport(id) {
        try {
            await client.query(
                `update passport set name='${this.name}', surname='${this.surname}', number = '${this.number}' where passport_id=${id}`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async deletePassport(id) {
        try {
            await client.query(`delete from passport where passport_id=${id}`);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async findPassports(name, surname, number) {
        let res;
        try {
            if (name && surname && number) {
                res = await client.query(
                    `select * from passport where name='${name}' and surname='${surname}' and number='${number}'`
                );
            } else if (name && surname) {
                res = await client.query(
                    `select * from passport where name='${name}' and surname='${surname}'`
                );
            } else if (name && number) {
                res = await client.query(
                    `select * from passport where name='${name}' and number = '${this.number}'`
                );
            } else if (surname && number) {
                res = await client.query(
                    `select * from passport where surname='${surname}' and number = '${this.number}'`
                );
            } else if (name) {
                res = await client.query(
                    `select * from passport where name='${name}'`
                );
            } else if (surname) {
                res = await client.query(
                    `select * from passport where surname='${surname}'`
                );
            } else if (number) {
                res = await client.query(
                    `select * from passport where number='${number}'`
                );
            }
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = Passport;
