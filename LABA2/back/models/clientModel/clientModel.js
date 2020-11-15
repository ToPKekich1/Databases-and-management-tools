const { Client } = require('pg');
const client = new Client(
    'postgres://postgres:Misha211100@localhost:5432/internetshop'
);
client.connect();

class ClientTable {
    constructor(passportId, login, password) {
        this.passportId = passportId;
        this.login = login;
        this.password = password;
    }

    static async getClients() {
        try {
            let res = await client.query('select * from clients');
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async addClient() {
        try {
            await client.query(
                `insert into clients (clientid, login, password) values (${this.passportId},'${this.login}','${this.password}')`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async editClient(id) {
        try {
            await client.query(
                `update clients set login='${this.login}', password='${this.password}' where clientid=${id}`
            );
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async deleteClient(id) {
        try {
            await client.query(`delete from clients where clientid=${id}`);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static async findClients(login, password) {
        let res;
        try {
            if (login && password) {
                res = await client.query(
                    `select * from clients where login='${login}' and password='${password}'`
                );
            } else if (login) {
                res = await client.query(
                    `select * from clients where login='${login}'`
                );
            } else if (password) {
                res = await client.query(
                    `select * from clients where password='${password}'`
                );
            }
            return res.rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

module.exports = ClientTable;
