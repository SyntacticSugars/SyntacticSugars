const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();
const path = require('path');
const xxxRouter = require('./routes/xRoute.js'); // TEMP ---------------------------------------------
const authRouter = require('./routes/authRouter.js');
const authController = require('./controllers/authController.js');

const mongoose = require('mongoose');
const keys = require('../config/keys');
const passportSetup = require('../config/passport-setup');
const passport = require('passport');
const cookieSession = require('cookie-session');

//intialize cookie session
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());

//start passport session
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log('connected to mongodb')
});

// statically serve everything in the dist folder on the route '/dist'
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

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

app.use('/auth', authRouter);


app.get('/login', authController.authCheck, (req, res) => {
  res.redirect('/')
})

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
