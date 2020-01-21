const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();
const path = require('path');
const xxxRouter = require('./routes/xRoute.js'); // TEMP ---------------------------------------------

// statically serve everything in the dist folder on the route '/dist'
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));


// parse incoming request body and cookies
app.use(bodyParser.json());
app.use(cookieParser());

// root handler
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

// route handlers
app.use('/server', xxxRouter); // TEMP ---------------------------------------------

// catch-all route handler for any requests to an unknown route
app.all('*', (req, res) => res.status(404).send('Page not found'));


// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.message);
  res.status(errorObj.status).json(errorObj.message);
});

// Set server to listen on PORT
app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));
