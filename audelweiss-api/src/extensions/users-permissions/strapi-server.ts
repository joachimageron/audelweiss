module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    try {
      const user = ctx.state.user;
      if (!user) {
        return ctx.unauthorized(
          "You must be logged in to update your profile."
        );
      }
      const data = ctx.request.body;
      const updatedUser = await strapi
        .documents("plugin::users-permissions.user")
        .update({
          documentId: user.documentId,
          data,
        });
      return ctx.send(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
      return ctx.badRequest("Unable to update user.");
    }
  };
  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });
  
  plugin.controllers.auth.sendEmailConfirmation = async (ctx) => {
    try {
      const data = ctx.request.body;
  
      // Cas 1 : envoi classique (juste email)
      if (typeof data.email === 'string') {
        await strapi.service("api::mailer.mailer").send({
          to: data.email,
          subject: "Confirme ton adresse email",
          text: `Merci de t'inscrire !`,
          html: `<p>Clique sur le lien de confirmation envoyé par notre site.</p>`,
        });
  
        return ctx.send({ email: data.email, sent: true });
      }
  
      // Cas 2 : data complète
      if (data && data.to && data.subject && data.text && data.html) {
        await strapi.service("api::mailer.mailer").send({
          to: data.to,
          subject: data.subject,
          text: data.text,
          html: data.html,
        });
  
        return ctx.send({ to: data.to, sent: true });
      }
  
      // Si rien de bon
      return ctx.badRequest("Format invalide. Envoyez 'email' ou 'to/subject/text/html'");
    } catch (err) {
      console.error("Erreur d'envoi d'email personnalisé:", err);
      return ctx.internalServerError("Échec de l'envoi du mail");
    }
  };  

  return plugin;
};
