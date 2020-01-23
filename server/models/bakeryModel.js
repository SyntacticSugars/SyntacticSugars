// INSERT INTO users (username, password, company, email) VALUES ('U user','pass','displayname','U email');
// INSERT INTO products (poster_id, title, type, img_url, price, description, location, shiptime_days, note) VALUES ('id','title','type','url', 499 = 4.99), 'desc', 'loc', # of days, 'note');

const { Pool } = require('pg');

const PG_URI = 'postgres://mdpuqwne:8xvOQ11vVzhWqtCAKGH1oTTJsnNK_fka@rajje.db.elephantsql.com:5432/mdpuqwne';

const URI = process.env.PG_URI || PG_URI;


// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI,
});

pool.query(`CREATE TABLE IF NOT EXISTS users
(_id SERIAL PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL,
  company VARCHAR (50) NOT NULL,
  email VARCHAR (355) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT (now()),
  last_login TIMESTAMP )`, (err, res) => {
  //console.log(err, res);
  // pool.end();

  if (err) return err;

  pool.query(`CREATE TABLE IF NOT EXISTS products
  (_id SERIAL PRIMARY KEY,
    poster_id INTEGER REFERENCES users(_id) ON DELETE CASCADE,
    title VARCHAR (64) NOT NULL,
    type VARCHAR (16) NOT NULL,
    img_url VARCHAR (128) NOT NULL,
    description VARCHAR (512),
    price INTEGER NOT NULL,
    rating INTEGER,
    shiptime_days INTEGER,
    location VARCHAR (124),
    note VARCHAR (24),
    created_at TIMESTAMP DEFAULT (now()))`, (err, res) => {
   // console.log(err, res);
    // pool.end();
  });
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
