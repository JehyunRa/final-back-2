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

const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL || ""

const client = new Client({
  connectionString,
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`))

module.exports = client;