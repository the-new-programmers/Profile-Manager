const mysql = require('mysql');
const colors = require('colors');
const { promisify } = require('util');

const { keys } = require('./database_keys');

const pool = mysql.createPool(keys);

pool.getConnection((errors, connection) => {
    if (connection) {
        connection.release();
        console.log(colors.yellow('DB is Connected Successfully'));
    }
});

/* Promisify Pool Queries */
pool.query = promisify(pool.query);

module.exports = pool;