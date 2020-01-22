const { Pool } = require('pg');

const PG_URI = 'postgres://mdpuqwne:8xvOQ11vVzhWqtCAKGH1oTTJsnNK_fka@rajje.db.elephantsql.com:5432/mdpuqwne';

const URI = process.env.PG_URI || PG_URI;


// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI,
});

// pool.query(`CREATE TABLE IF NOT EXISTS users
// (_id serial PRIMARY KEY,
//   username VARCHAR (50) UNIQUE NOT NULL,
//   company VARCHAR (50) NOT NULL,
//   password VARCHAR (50) NOT NULL,
//   email VARCHAR (355) UNIQUE NOT NULL,
//   created_on TIMESTAMP NOT NULL,
//   last_login TIMESTAMP )`, (err, res) => {
//   console.log(err, res);
//   // pool.end();
// });

// pool.query(`CREATE TABLE IF NOT EXISTS products
// (_id serial PRIMARY KEY,
//   poster_id INT REFRENCES users(_id) ON DELETE CASCADE,
//   title VARCHAR (64) NOT NULL,
//   type VARCHAR (16) NOT NULL,
//   img_url VARCHAR (128) NOT NULL,
//   description VARCHAR (512) NOT NULL,
//   price INT NOT NULL,
//   rating INT NOT NULL,
//   shiptime_days INT,
//   location VARCHAR (124),
//   note VARCHAR (24),
//   created_at TIMESTAMP DEFAULT (now()))`, (err, res) => {
//   console.log(err, res);
//   // pool.end();
// });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
