'use strict';

module.exports = {
  async send(ctx) {
    const { to, user, text, html } = ctx.request.body;
    const info = await strapi.service('api::mailer.mailer').send({ to, subject, text, html });
    ctx.body = { message: 'Mail envoyé', info };
  },
};
