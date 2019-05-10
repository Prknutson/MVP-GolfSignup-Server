const CONFIG = {
  DATABASE: {
    UID: '',
    PWD: '',
    HOST: process.env.DATABASE_URL,
    PORT: 5432,
    DATABASE: 'signups'
  }

}

module.exports = CONFIG