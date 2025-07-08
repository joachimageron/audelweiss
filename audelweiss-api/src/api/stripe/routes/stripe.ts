export default {
  routes: [
    {
     method: 'GET',
     path: '/create-payment-intent',
     handler: 'stripe.createPaymentIntent',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
