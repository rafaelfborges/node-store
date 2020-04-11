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
const Customer = require("./models//Customer");

//Carrega as rotas
const indexRoute = require('./routes/IndexRoute');
const productRoute = require('./routes/ProductRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;