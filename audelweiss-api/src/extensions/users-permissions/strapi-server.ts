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
  return plugin;
};