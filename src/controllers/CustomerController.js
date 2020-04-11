'use strict';
const repository = require("../repositories/CustomerRepository");

const emailService = require('../services/EmailService');
const md5 = require("md5");

exports.post = async (req, res, next) => {
  try {
    await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });

    emailService.send(
      req.body.email,
      'Bem vindo ao Node Store',
      global.EMAIL_TMPL.replace('{0}', req.body.name)
    );

    res.status(201).send({
      message: "Cliente cadastrado com sucesso!"
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};