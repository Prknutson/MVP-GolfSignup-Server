const CONFIG = require('../config.js');

const {
  Pool,
} = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,

})

module.exports = pool;