module.exports = (plugin) => {
  plugin.contentTypes["api::product.product"].definition.fields.id = {
    type: "ID!",
    resolve: (parent) => parent.id,
  };

  return plugin;
};
