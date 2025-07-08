export default {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.postContact',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
