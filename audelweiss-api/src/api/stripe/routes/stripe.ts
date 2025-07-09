export default {
  routes: [
    {
     method: 'POST',
     path: '/create-payment-intent',
     handler: 'stripe.createPaymentIntent',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
