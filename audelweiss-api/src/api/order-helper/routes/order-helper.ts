


export default {
  routes: [
    {
     method: 'POST',
     path: '/create-order',
     handler: 'order-helper.createOrder',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
