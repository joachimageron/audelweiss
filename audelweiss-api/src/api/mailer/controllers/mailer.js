'use strict';

module.exports = {
  async send(ctx) {
    const data = ctx.request.body;

    if (!data.to || !data.subject || !data.text || !data.html) {
      return ctx.badRequest('Champs requis : to, subject, text, html');
    }

    const result = await strapi.service('api::mailer.mailer').send(data);

    return ctx.send({
      ...data,
      result,
      sent: true,
    });
  },
};
