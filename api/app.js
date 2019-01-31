const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');
const constant = require('./constants/configs');
const routes = require('./api/routing');

mongoose.Promise = global.Promise;
mongoose
  .connect(
    constant.dbUrl,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log(`${constant.dataBaseConnectSuccessfully}: ${constant.dbUrl}`);
    },
    error => {
      console.log(constant.dataBaseNotConnectSuccessfully);
    }
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', constant.server.frontHost);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/images', express.static(__dirname + '/images'));

routes(app);

module.exports = app;
