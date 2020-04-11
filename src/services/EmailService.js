'use strict';
const config = require('../config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
  const msg = {
    to: to,
    from: 'rafaelfborges@hotmail.com',
    subject: subject,
    html: body
  }

  sgMail
    .send(msg)
    .then(() => { }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
}