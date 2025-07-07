'use strict';

const nodemailer = require('nodemailer');

module.exports = {
  async send({ to, subject, text, html }) {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    return transporter.sendMail({
      from: '"Mon site" <noreply@monsite.com>',
      to,
      subject,
      text,
      html,
    });
  },
};
