const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Info@1234",
    host: "localhost",
    port: 5432,
    database: "pgRegister"
});

module.exports = pool;