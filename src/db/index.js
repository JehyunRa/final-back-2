// const pg = require("pg");

// const client = new pg.Client({
//   connectionString: process.env.DATABASE_URL || ""
// });

// client
//   .connect(
//     console.log(`database_URL: ${process.env.DATABASE_URL}`)
//     )
//   .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

// module.exports = client;

const { Pool, Client } = require('pg')
const connectionString = process.env.DATABASE_URL || ""

const pool = new Pool({
  connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

module.exports = client;