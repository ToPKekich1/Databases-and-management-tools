const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'Misha211100',
    host: 'localhost',
    port: 5432,
    database: 'internetshop'
});

module.exports = pool;
