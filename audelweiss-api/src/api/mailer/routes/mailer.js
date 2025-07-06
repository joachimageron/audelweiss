export default [
  {
    method: 'POST',
    path: '/send',
    handler: 'mailer.send',
    config: {
      policies: [],
      auth: false,
    },
  },
];
