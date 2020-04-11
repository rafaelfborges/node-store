require('dotenv').config()
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Conecta ao banco
mongoose.connect(process.env.MONGO_URL_CONNECTION, {
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;