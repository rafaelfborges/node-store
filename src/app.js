'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

//Conecta ao banco
mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Carrega os Models
const Product = require('./models/Product');
const Customer = require("./models/Customer");
const Order = require("./models/Order");

//Carrega as rotas
const indexRoute = require('./routes/IndexRoute');
const productRoute = require('./routes/ProductRoute');
const customerRoute = require('./routes/CustomerRoute');
const orderRoute = require('./routes/OrderRoute');

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Habilita o CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;