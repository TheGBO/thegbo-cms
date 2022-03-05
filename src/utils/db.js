const Pool = require('pg').Pool;

const penv = process.env;

const pool = new Pool({
    user:penv.DATABASE_USER,
    password:penv.DATABASE_PASSWORD,
    host:penv.DATABASE_HOST,
    port:penv.DATABASE_PORT,
    database:penv.DATABASE_NAME
});

module.exports = pool;
