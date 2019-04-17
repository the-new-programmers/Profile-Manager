const mysql = require('mysql');
const { promisify } = require('util');

const { databasekeys } = require('./database_keys');

const pool = mysql.createPool(databasekeys);

module.exports = pool;

/* Promisify Pool Queries */
pool.query = promisify(pool.query);