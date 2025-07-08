"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'sandbox.smtp.mailtrap.io',
          port: 2525,
          auth: {
            user: env('MAILTRAP_USER'),
            pass: env('MAILTRAP_PASS'),
          },
        },
        settings: {
          defaultFrom: 'no-reply@audelweiss.fr',
          defaultReplyTo: 'no-reply@audelweiss.fr',
          testAddress: 'test@bidon.com',
        },
      },
    },
  });
  