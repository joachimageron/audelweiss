// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
  bootstrap({ strapi }) {
    // Extension du schéma GraphQL pour exposer l'id
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "Product",
          definition(t) {
            t.int("id"); // Expose explicitement le champ id
          },
        }),
      ],
    }));
  },
};
