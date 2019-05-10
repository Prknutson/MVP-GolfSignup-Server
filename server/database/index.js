const CONFIG = require('../config.js');

const {
  Pool,
} = require('pg')

const pool = new Pool({
  user: CONFIG.DATABASE.UID,
  host: CONFIG.DATABASE.HOST,
  database: CONFIG.DATABASE.DATABASE,
  password: CONFIG.DATABASE.PWD,
  port: CONFIG.DATABASE.PORT,
  max: 10,
})

module.exports = pool;